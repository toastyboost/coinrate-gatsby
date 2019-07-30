import React from 'react';

import { useTable, useColumns, useRows, usePagination } from 'react-table';

export default function Table({ data, columns }) {
  const instance = useTable(
    {
      data,
      columns,
    },
    useColumns,
    useRows,
    usePagination
  );

  console.log('render', instance);

  return <div>1</div>;
}
