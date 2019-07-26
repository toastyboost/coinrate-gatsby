import React from 'react';

import { TableContainer } from './styles';
import { tableOptions } from './constants';
import { Pagination } from './pagination';

import { Loader } from 'components';

const Table = ({ tableData = [], columns, pageSize = 15, fetchCharts }) => {
  return (
    <TableContainer
      PaginationComponent={Pagination}
      {...tableOptions}
      noDataText={<Loader />}
      loading={tableData ? false : true}
      columns={columns}
      data={tableData}
      pageSize={pageSize ? pageSize : tableData.length}
      onPageChange={() => {
        document
          .getElementById('react-table')
          .scrollIntoView({ behavior: 'smooth', block: 'start' });
      }}
      onFetchData={state => {
        const { sortedData, page } = state;

        const symbols = sortedData
          .splice(page * pageSize, pageSize)
          .map(({ _original }) => _original.ID);

        fetchCharts(symbols, '7d');
      }}
    />
  );
};

export { Table };
