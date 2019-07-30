import React, { useState, useEffect, useMemo } from 'react';
import { useTable, useSortBy, useTableState, usePagination } from 'react-table';
import { Cointainer, Head, Body, Row, Cell } from './styles';
import { tableOptions } from './constants';
import { Pagination } from './pagination';

import { Loader } from 'components';

function Table({ ...props }) {
  const instance = useTable(
    {
      ...props,
    },
    useSortBy,
    usePagination
  );
  console.log(' .rops ', props);
  const {
    getRowProps,
    pageOptions,
    page,
    state: [{ pageIndex, pageSize, sortBy, groupBy, filters }],
    gotoPage,
  } = instance;
  console.log('instance', instance);

  // tableBody =
  //   page && page.length ? page.map((row, i) => renderRow(row, i)) : null;

  let pagination;

  pagination = pageOptions.length ? (
    <Pagination>
      <Cell>
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Go to page:{' '}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            style={{ width: '100px' }}
          />
        </span>{' '}
        <select value={pageSize}>
          {[10, 20, 30, 40, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </Cell>
    </Pagination>
  ) : null;

  return (
    <div>
      <Cointainer>1</Cointainer>
    </div>
  );
}

export { Table };
