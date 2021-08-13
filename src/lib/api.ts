import * as Contentful from 'contentful';

import { createClient } from 'contentful';

import { parsePage } from './pageParsers';
import { PageContentType, PageContentTypes } from './constants';
import { Locale } from './translations';

import { Product, Color } from './customtypes';

import stringify from 'fast-safe-stringify';
import { TypeSlotPlacement } from './types';
import { resolve } from 'path';

export const client = createClient({
  space: process.env.CF_SPACE_ID,
  accessToken: process.env.CF_DELIVERY_ACCESS_TOKEN,
});

const previewClient = createClient({
  space: process.env.CF_SPACE_ID,
  accessToken: process.env.CF_PREVIEW_ACCESS_TOKEN,
  host: 'preview.contentful.com',
});

const getClient = (preview: boolean) => (preview ? previewClient : client);

type GetPageParams = {
  slug: string;
  locale: Locale;
  pageContentType: string;
  preview?: boolean;
};

const getPageQuery = (params: GetPageParams) => ({
  limit: 1,
  include: 10,
  locale: params.locale,
  'fields.slug': params.slug,
  content_type: PageContentType,
  'fields.content.sys.contentType.sys.id': params.pageContentType,
});

export async function getPage(params: GetPageParams) {
  const query = getPageQuery(params);
  const {
    items: [page],
  } = await getClient(params.preview).getEntries(query);

  return page ? parsePage(page) : null;
}

type GetComponentParams = {
  locale: Locale;
  id: string;
  preview?: boolean;
};

export async function getComponent(params: GetComponentParams) {
  const query = {
    include: 10,
    locale: params.locale,
  };
  const component = await getClient(params.preview).getEntry(params.id, query);

  return component ? (JSON.parse(stringify(component)) as Contentful.Entry<any>) : null;
}

type GetPagesOfTypeParams = {
  locale: Locale;
  pageContentType: string;
  limit: number;
  preview?: boolean;
};

export async function getPagesOfType(params: GetPagesOfTypeParams) {
  const { pageContentType, preview, locale, limit } = params;
  const client = getClient(preview);

  const { items: pages } = await client.getEntries({
    limit: limit,
    locale,
    content_type: PageContentType,
    'fields.content.sys.contentType.sys.id': pageContentType,
    order: 'sys.createdAt',
  });

  return pages ? pages.map((page) => parsePage(page)) : [];
}

type GetBlogPostTypeParams = {
  locale: Locale;
  limit: number;
  preview?: boolean;
  categoryId: string;
};

export async function getBlogPosts(params: GetBlogPostTypeParams) {
  const { preview, locale, limit, categoryId } = params;
  const client = getClient(preview);

  const { items: pages } = await client.getEntries({
    limit: limit,
    locale,
    content_type: 'page',
    'fields.content.sys.contentType.sys.id': 'pageBlogPost',
    'fields.content.fields.category.sys.id': categoryId,
    order: 'sys.createdAt',
  });

  return pages ? pages.map((page) => parsePage(page)) : [];
}

export async function getJobEntries({ categoryId }) {
  const client = getClient(false);

  const { items: pages } = await client.getEntries({
    content_type: 'page',
    'fields.content.sys.contentType.sys.id': PageContentTypes.SpreadGroup,
    'fields.content.fields.category.sys.id': categoryId,
    order: 'sys.createdAt',
  });

  return pages ? pages.map((page) => parsePage(page)) : [];
}

type GetSlotPlacementsParams = {
  locale: Locale;
  limit: number;
  preview?: boolean;
  slotId: string;
  now: Date;
};

export async function getSlotPlacements(params: GetSlotPlacementsParams) {
  const { preview, locale, limit, slotId, now } = params;
  const client = getClient(preview);

  const { items: slotPlacements } = await client.getEntries({
    limit: limit,
    include: 10,
    locale,
    content_type: 'slotPlacement',
    'fields.slot.sys.id': slotId,
    'fields.start[lte]': now.toISOString(),
    'fields.end[gt]': now.toISOString(),
    order: 'fields.start,fields.end',
  });

  return slotPlacements
    ? slotPlacements.map(
        (slotPlacement) => JSON.parse(stringify(slotPlacement)) as TypeSlotPlacement
      )
    : [];
}

const LANGUAGE_TO_LOCALE = {
  de: 'de_DE',
  en: 'en_GB',
};

const shopId = process.env.SPRD_SHOP_ID;
const apiKey = process.env.SPRD_API_KEY;
const apiBase = process.env.SPRD_API_BASE;
const imageBase = process.env.SPRD_IMAGE_BASE;

type GetProductParams = {
  id: string;
  locale: string;
};

export async function getProduct(params: GetProductParams) {
  const { id, locale } = params;

  let product = null;
  const response = await fetch(
    `${apiBase}/api/v1/shops/${shopId}/productTypes/${id}?mediaType=json&apiKey=${apiKey}&locale=${LANGUAGE_TO_LOCALE[locale]}`
  );
  if (response.status == 200) {
    const data = await response.json();

    product = {
      id: id,
      name: data['name'],
      description: data['description'],
      defaultViewId: data['defaultValues']['defaultView']['id'],
      defaultAppearanceId: data['defaultValues']['defaultAppearance']['id'],
      sizes: data['sizes'].map((s) => s['name']),
      views: data['views'].map((v) => v['id']),
      colors: data['appearances'].map((a) => {
        const color = {
          id: a['id'],
          name: a['name'],
          hex: a['colors'].filter((c) => c['index'] == 0)[0]['value'],
          texture: a['texture'],
        } as Color;
        return color;
      }),
    } as Product;
  }

  return product;
}

type GetProductTypeImageParams = {
  id: string;
  appearance: string;
  view: string;
  size: string;
};

export function getProductTypeImageUrl(params: GetProductTypeImageParams) {
  const { id, appearance, view, size } = params;
  return `${imageBase}/image-server/v1/productTypes/${id}/views/${view}/appearances/${appearance},width=${size}.png`;
}

type GetAppearanceImageParams = {
  id: string;
  size: string;
};

export function getAppearanceImageUrl(params: GetAppearanceImageParams) {
  const { id, size } = params;
  return `${imageBase}/image-server/v1/appearances/${id},width=${size}.png`;
}
