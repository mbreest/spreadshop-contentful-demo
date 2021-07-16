import { useRouter } from 'next/router';

import { TypePage } from './types';
import { PageContentTypes } from './constants';
import { isPreviewEnabled, withPreviewParam } from './preview';

export interface LinkProps {
  href: string;
  as: string;
}

function linkToPage(page: TypePage, isPreview: boolean): LinkProps {
  const slug = page.fields.slug;
  const pageType = page.fields.content?.sys.contentType.sys.id;

  switch (pageType) {
    case PageContentTypes.HelpDeskArticle: {
      return {
        href: withPreviewParam('/helpdesk/[slug]', isPreview),
        as: withPreviewParam(`/helpdesk/${slug}`, isPreview),
      };
    }

    case PageContentTypes.LandingPage: {
      if (slug == 'blog') {
        return {
          href: withPreviewParam(`/blog`, isPreview),
          as: withPreviewParam(`/blog`, isPreview),
        };
      } else {
        return {
          href: withPreviewParam(`/[slug]`, isPreview),
          as: withPreviewParam(`/${slug}`, isPreview),
        };
      }
    }

    case PageContentTypes.BlogCategory: {
      return {
        href: withPreviewParam(`/blog/category/[slug]`, isPreview),
        as: withPreviewParam(`/blog/category/${slug}`, isPreview),
      };
    }

    case PageContentTypes.BlogPost: {
      return {
        href: withPreviewParam(`/blog/[slug]`, isPreview),
        as: withPreviewParam(`/blog/${slug}`, isPreview),
      };
    }

    default: {
      throw new Error('Page type is not supported yet');
    }
  }
}

function normalizePath(path: string) {
  // strip query params & trailing slashes
  return path.replace(/\?.*/, '').replace(/\/$/, '');
}

export function useNavigation() {
  const { query, asPath: currentPath, route } = useRouter();
  const isPreview = isPreviewEnabled(query);

  const linkTo = (page: TypePage) => {
    return linkToPage(page, isPreview);
  };

  const linkToPath = (url: string): LinkProps => {
    return {
      href: withPreviewParam(`${url}`, isPreview),
      as: withPreviewParam(`${url}`, isPreview),
    };
  };

  const isActive = (page: TypePage) => {
    const active = normalizePath(currentPath);
    const target = normalizePath(linkTo(page).as);

    return target === active;
  };

  return {
    currentPath,
    isPreview,
    route,
    linkTo,
    linkToPath,
    isActive,
  };
}
