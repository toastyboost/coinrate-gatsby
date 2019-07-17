import React from 'react';

import { TableContainer } from './styles';
import { tableOptions } from './constants';
import { Loader } from 'components';

const Table = ({ data = [], columns, pageSize = 15 }) => (
  <TableContainer
    {...tableOptions}
    noDataText={<Loader />}
    loading={data ? false : true}
    columns={columns}
    data={data}
    pageSize={pageSize ? pageSize : data.length}
    onPageChange={() => {
      document
        .getElementById('react-table')
        .scrollIntoView({ behavior: 'smooth', block: 'start' });
    }}
  />
);

export { Table };
