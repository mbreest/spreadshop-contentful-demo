import has from 'lodash/has';
import { Document, BLOCKS, INLINES } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { EmbeddedAsset } from './embedded-asset';
import { Hyperlink } from './hyperlink';

export const isRichText = (x: Document | unknown): x is Document => {
  return ['data', 'content', 'nodeType'].every((prop) => has(x, prop));
};

const PlainHyperlink = (props) => <Hyperlink {...props} type="PlainLink" />;
const AssetHyperlink = (props) => <Hyperlink {...props} type="AssetLink" />;

export const renderRichText = (rtd: any) =>
  documentToReactComponents(rtd, {
    renderNode: {
      [INLINES.HYPERLINK]: PlainHyperlink,
      [INLINES.ASSET_HYPERLINK]: AssetHyperlink,
      [INLINES.ENTRY_HYPERLINK]: () => null, // Ignore entry hyperlink
      [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
        if (node.data.target.sys.contentType.sys.id === 'table') {
          const table = node.data.target.fields.table.tableData;
          console.log();
          return (
            <table className="table-auto border border-gray-300 p-2 mt-2 mb-2">
              <tr>
                {table &&
                  table[0].map(function (column, idx) {
                    return (
                      <th className="border border-gray-300 p-2" key={'header-' + idx}>
                        {column}
                      </th>
                    );
                  })}
              </tr>
              {table &&
                table.slice(1).map(function (row, idx) {
                  return (
                    <tr key={'rows-' + idx} className={idx % 2 == 0 ? 'bg-gray-100' : ''}>
                      {row &&
                        row.map(function (column, idx1) {
                          return (
                            <td key={'column-' + idx} className="border border-gray-300 p-2">
                              {column}
                            </td>
                          );
                        })}
                    </tr>
                  );
                })}
            </table>
          );
        }
      },
      [BLOCKS.EMBEDDED_ASSET]: EmbeddedAsset,
      [BLOCKS.HEADING_1]: (node, children) => {
        return (
          <h1 className="h1 pt-4 text-3xl font-medium leading-tight text-gray-900">{children}</h1>
        );
      },
      [BLOCKS.HEADING_2]: (node, children) => {
        return (
          <h1 className="h2 pt-4 text-2xl pb-4 font-medium leading-tight text-gray-900">
            {children}
          </h1>
        );
      },
      [BLOCKS.HEADING_3]: (node, children) => {
        return (
          <h1 className="h3 pt-4 text-1xl font-medium leading-tight text-gray-900">{children}</h1>
        );
      },
      [BLOCKS.OL_LIST]: (node, children) => {
        return <ol>{children}</ol>;
      },
    },
  });
