import React, { useState, useEffect, useMemo } from 'react';
import { useTable, useColumns, useRows, usePagination } from 'react-table';
import { Cointainer, Head, Body, Row, Cell } from './styles';
import { tableOptions } from './constants';
import { Pagination } from './pagination';

import { Loader } from 'components';
import { Value, SparkChart } from 'components';

const columns = [
  {
    Header: '#',
    accessor: 'RANK',
  },
  {
    Header: () => (
      <>
        <span className="title">Crypto</span>
        <span className="subtitle">name and price</span>
      </>
    ),
    Cell: ({
      row: {
        original: { ID, TICKER, NAME, PRICE, CHANGE1HOUR },
      },
    }) => (
      <a
        href={`/cryptocurrencies/${ID}/`}
        className="crypto"
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* <div
          className="crypto__img"
          style={{
            backgroundImage: `url("https://coinrate.com/static/crypto/${TICKER.toLowerCase()}-${ID}.svg?v=1")`,
          }}
        /> */}
        <div className="crypto__name">
          <span className="ticker">{TICKER}</span>
          <span className="name">{NAME}</span>
        </div>
        <div className="crypto__price">
          <Value value={PRICE} prefix="$" />
          <Value value={CHANGE1HOUR} suffix="%" type="triangle" />
        </div>
      </a>
    ),
    accessor: 'PRICE',
  },
  {
    Header: () => (
      <>
        <span className="title">Cap</span>
        <span className="subtitle">market</span>
      </>
    ),
    Cell: ({ value }) => <Value value={value} prefix="$" />,
    accessor: 'CAP',
  },
  {
    Header: () => (
      <>
        <span className="title">Volume</span>
        <span className="subtitle">today&apos;s</span>
      </>
    ),
    Cell: ({ value }) => <Value value={value} prefix="$" />,
    accessor: 'VOLUME24HOUR',
  },
  {
    Header: () => (
      <>
        <span className="title">24h</span>
        <span className="subtitle">Change</span>
      </>
    ),
    Cell: ({ value }) => <Value value={value} suffix="%" />,
    accessor: 'CHANGE24HOUR',
  },
  {
    Header: () => (
      <>
        <span className="title">7D</span>
        <span className="subtitle">Change</span>
      </>
    ),
    Cell: ({ value }) => <Value value={value} suffix="%" />,
    accessor: 'CHANGE7DAYS',
  },
  {
    Header: () => (
      <>
        <span className="title">7D</span>
        <span className="subtitle">chart</span>
      </>
    ),
    // Cell: ({ row: { original: ID } }) => <SparkChart symbol={ID} isRef />,
    Cell: 'chart',
    accessor: 'CHART',
  },
  {
    Header: () => (
      <>
        <span className="title">Share</span>
        <span className="subtitle">Market</span>
      </>
    ),
    Cell: ({ value }) => <Value value={value * 100} suffix="%" />,
    accessor: 'SHARE',
  },
];

const FD = [
  {
    CAP: 22417362439.8603,
    CHANGE1HOUR: 0.185914,
    CHANGE7DAYS: -6.06607,
    CHANGE24HOUR: 0.558176,
    CHANGECAP24H: 0.5553592031708289,
    CHANGEVOLUME24HOUR24H: -23.806693169962465,
    HIGH24HOUR: 210.453031597,
    HISTORYHIGH: 1404.34,
    HISTORYLOW: 0.422475,
    ID: 'ethereum',
    LOW24HOUR: 206.939583468,
    NAME: 'Ethereum',
    PRICE: 209.33274939,
    PRICEBTC: 0.0218632427751352,
    RANK: 2,
    SHARE: 0.0842844099574267,
    SUPPLY: 107089609.749,
    TICKER: 'ETH',
    VOLUME24HOUR: 4774378094.86036,
  },
  {
    CAP: 22417362439.8603,
    CHANGE1HOUR: 0.185914,
    CHANGE7DAYS: -6.06607,
    CHANGE24HOUR: 0.558176,
    CHANGECAP24H: 0.5553592031708289,
    CHANGEVOLUME24HOUR24H: -23.806693169962465,
    HIGH24HOUR: 210.453031597,
    HISTORYHIGH: 1404.34,
    HISTORYLOW: 0.422475,
    ID: 'ethereum',
    LOW24HOUR: 206.939583468,
    NAME: 'Ethereum',
    PRICE: 209.33274939,
    PRICEBTC: 0.0218632427751352,
    RANK: 2,
    SHARE: 0.0842844099574267,
    SUPPLY: 107089609.749,
    TICKER: 'ETH',
    VOLUME24HOUR: 4774378094.86036,
  },
];

function Table() {
  const { rows } = useTable(
    {
      data: FD,
      columns: [],
    },

    useColumns,
    useRows,
    // usePagination
  );
  console.log('render', 1);
  // console.log('instance', instance);
  return '1';
}

// function Table({ ...props }) {
//   const state = useTableState({
//     pageSize: 20,
//     pageIndex: 1,
//     manualPagination: false,
//   });

//   const instance = useTable(
//     {
//       ...props,
//       state,
//     },
//     // usePagination,
//     useSortBy
//   );

//   console.log('instance', instance);

//   return (
//     <Cointainer>
//       {/* <Head>
//         {headerGroups.map((headerGroup, key) => (
//           <Row key={key}>
//             {headerGroup.headers.map(
//               ({ render, id, sorted, sortedDesc, getSortByToggleProps }, i) => {
//                 const { onClick } = getSortByToggleProps();
//                 return (
//                   <Cell
//                     key={i}
//                     id={id}
//                     onClick={onClick}
//                     isSorted={sorted}
//                     isDesc={sortedDesc ? 'desc' : 'asc'}
//                     isHead
//                   >
//                     {render('Header')}
//                   </Cell>
//                 );
//               }
//             )}
//           </Row>
//         ))}
//       </Head> */}
//       <Body>
//         {/* {rows.map(
//           (row, key) =>
//             prepareRow(row) || (
//               <Row key={key}>
//                 {row.cells.map(({ render, column: { id } }, i) => (
//                   <Cell key={i} id={id}>
//                     {render('Cell')}
//                   </Cell>
//                 ))}
//               </Row>
//             )
//         )} */}
//       </Body>
//     </Cointainer>
//   );
// }
// const Table = ({ columns, data }) => {
// const cashedColumns = useMemo(() => columns, []);
// const cashedData = useMemo(() => data, []);

// const tableState = useTableState({
//   pageSize: 10,
//   pageIndex: 0,
//   pageCount: 0,
// });

// const { headerGroups, rows, prepareRow } = useTable(
//   {
//     columns: cashedColumns,
//     data: cashedData,
//     state: tableState,
//   },
//   useSortBy
//   // usePagination
// );

// console.log('1', 1);
// (tableData.length / pageSize).toFixed(0)
// const [pages, setPages] = useState(30);

// useEffect(() => {
//   setPages(Math.floor(tableData.length / pageSize));
// }, [tableData]);
// const cashedColumns = useMemo(() => columns, []);
// const cashedData = useMemo(() => data, []);
// console.log('cashedData', cashedData.splice(0, 100));
// const { headerGroups, rows, prepareRow } = useTable(
//   {
//     infinite: true,
//     columns: cashedColumns,
//     data: cashedData.splice(0, 100),
//   },
//   useSortBy,
//   usePagination
// );
// console.log('render');
// return (
//   <Cointainer>
// <Head>
//   {headerGroups.map((headerGroup, key) => (
//     <Row key={key}>
//       {headerGroup.headers.map(
//         ({ render, id, sorted, sortedDesc, getSortByToggleProps }, i) => {
//           const { onClick } = getSortByToggleProps();
//           return (
//             <Cell
//               key={i}
//               id={id}
//               onClick={onClick}
//               isSorted={sorted}
//               isDesc={sortedDesc ? 'desc' : 'asc'}
//               isHead
//             >
//               {render('Header')}
//             </Cell>
//           );
//         }
//       )}
//     </Row>
//   ))}
// </Head>
//     <Body>
//       {rows.map(
//         (row, key) =>
//           prepareRow(row) || (
//             <Row key={key}>
//               {row.cells.map(({ render, column: { id } }, i) => (
//                 <Cell key={i} id={id}>
//                   {render('Cell')}
//                 </Cell>
//               ))}
//             </Row>
//           )
//       )}
//     </Body>
//   </Cointainer>
// );
// <TableContainer
//   {...{
// data,
// columns,
// infinite,
// state,
// loading,
// manualSorting: true, // Manual sorting
// manualFilters: true, // Manual filters
// manualPagination: true, // Manual pagination
// disableMultiSort: true, // Disable multi-sort
// disableGrouping: true, // Disable grouping
// debug: true
// }}
// />

//   PaginationComponent={Pagination}
//   {...tableOptions}
//   noDataText={<Loader />}
//   loading={tableData ? false : true}
//   columns={columns}
//   data={tableData}
//   pages={30}
//   pageSize={pageSize}
//   manual
//   onPageChange={() => {
//     document
//       .getElementById('react-table')
//       .scrollIntoView({ behavior: 'smooth', block: 'start' });
//   }}
//   onFetchData={state => {
//     const { sortedData, page, pageSize, pages } = state;

//     // console.log('pages', pages);
//     // const symbols = sortedData
//     //   .splice(page * pageSize, pageSize)
//     //   .map(({ _original }) => _original.ID);

//     // fetchCharts(symbols, '7d');
//   }}

export { Table };
