import { NodeRenderer } from '@contentful/rich-text-react-renderer';
import Table from 'components/Table';

export const EmbeddedEntry = (({
  data: {
    target: { sys, fields },
  },
}) => {
  if (sys.contentType.sys.id === 'table') {
    return <Table tableData={fields.table.tableData} />;
  } else {
    return null;
  }
}) as NodeRenderer;
