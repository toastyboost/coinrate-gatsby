import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import {
  //
  useTable,
  usePagination,
  useTableState,
  // useSortBy,
} from 'react-table';

import { Pagination } from './Pagination';
import { Loader } from 'components';

import { Cointainer, Head, Body, Row, TD, TH } from './styles';

const Table = ({
  data = [],
  columns = [],
  pageSize = 15,
  SSR = {
    ssrPage: 0,
    ssrTotal: Math.ceil(data.length / pageSize),
  },
  fetchData,
}) => {
  const dispatch = useDispatch();
  const state = useTableState({
    pageSize,
  });

  const instance = useTable(
    {
      data,
      columns,
      state,
    },
    // useSortBy,
    usePagination
  );

  const { page, prepareRow, headers, gotoPage } = instance;
  const { ssrPage } = SSR;

  useEffect(() => {
    gotoPage(ssrPage - 1);
  }, [data]);

  useEffect(() => {
    if (data.length && fetchData) {
      const { getSymbolChart } = fetchData;
      const symbols = page.map(item => item.original.ID);

      dispatch(getSymbolChart(symbols, '7d'));
    }
  }, [page]);
  return (
    <Cointainer>
      <Head>
        <Row>
          {headers.map(({ render, id, sorted }, key) => {
            // const { onClick } = getSortByToggleProps();
            return (
              <TH
                key={key}
                cellID={id}
                isDesc={!sorted ? null : sorted.id === id && !sorted.desc}
                // onClick={onClick}
              >
                {render('Header')}
              </TH>
            );
          })}
        </Row>
      </Head>
      <Body>
        {page ? (
          page.map(
            (row, key) =>
              prepareRow(row) || (
                <Row key={key}>
                  {row.cells.map(({ render, column: { id } }, i) => (
                    <TD key={i} cellID={id}>
                      {render('Cell')}
                    </TD>
                  ))}
                </Row>
              )
          )
        ) : (
          <Loader />
        )}
      </Body>
      <Pagination instance={instance} SSR={SSR} />
    </Cointainer>
  );
};

export { Table };
