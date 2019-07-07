import React, { useEffect } from 'react';

import { TableContainer } from './styles';
import { tableColumns } from './columns';
import { tableOptions } from './constants';

const Table = ({ getMarketData, data, start, limit }) => {
  useEffect(() => {
    getMarketData(start, limit);
  }, []);

  if (!data) return false;

  return (
    <TableContainer
      {...tableOptions}
      columns={tableColumns}
      loading={data ? false : true}
      data={data.data}
      onPageChange={() => {
        document
          .getElementById('react-table')
          .scrollIntoView({ behavior: 'smooth', block: 'start' });
      }}

      // onSortedChange={ () => {
      //     getChartsData(loadArray, '7d')
      //     loadArray = []
      // }}
    />
  );
};

export { Table };
