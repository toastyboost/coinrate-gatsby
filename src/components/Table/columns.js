import React from 'react';
import { Value } from 'components';

const tableColumns = [
  {
    Header: () => (
      <div className="rt-thead-item">
        <span />
        <span className="subtitle">#</span>
      </div>
    ),
    accessor: 'RANK',
    Cell: row => <div className="rank">{row.original.RANK}</div>,
    width: 40,
  },
  {
    Header: () => (
      <div className="rt-thead-item">
        <span className="title">CRYPTO</span>
        <span className="subtitle">name and price</span>
      </div>
    ),
    accessor: 'PRICE',
    Cell: row => (
      <a href={`/crypto/${row.original.ID}`} className="rt-td-body">
        <div
          className="crypto__img"
          style={{
            backgroundImage: `url("https://coinrate.com/static/crypto/${row.original.TICKER.toLowerCase()}-${
              row.original.ID
            }.svg?v=1")`,
          }}
        />
        <div className="crypto__name">
          <span className="ticker">{row.original.TICKER}</span>
          <span className="name">{row.original.NAME}</span>
        </div>
        <div className="crypto__price">
          <Value value={row.original.PRICE} prefix="$" />
          <Value value={row.original.CHANGE1HOUR} suffix="%" type="triangle" />
        </div>
      </a>
    ),
    width: 300,
  },
  {
    Header: () => (
      <div className="rt-thead-item">
        <span className="title">CAP</span>
        <span className="subtitle">market</span>
      </div>
    ),
    accessor: 'CAP',
    Cell: row => (
      <div className="cap rt-tbody-item">
        <Value value={row.value} prefix="$" />
      </div>
    ),
    // width: 110
  },
  {
    Header: () => (
      <div className="rt-thead-item">
        <span className="title">volume</span>
        <span className="subtitle">todays</span>
      </div>
    ),
    accessor: 'VOLUME24HOUR',
    Cell: row => (
      <div className="volume rt-tbody-item">
        <Value value={row.value} prefix="$" />
      </div>
    ),
    // width: 100
  },
  {
    Header: () => (
      <div className="rt-thead-item">
        <span className="title">24h</span>
        <span className="subtitle">Change</span>
      </div>
    ),
    accessor: 'CHANGE24HOUR',
    Cell: row => (
      <div className="change rt-tbody-item">
        <div className="change__pct">
          <Value value={row.original.CHANGE24HOUR} suffix="%" />
        </div>
      </div>
    ),
    // width: 100
  },
  {
    Header: () => (
      <div className="rt-thead-item">
        <span className="title">7D</span>
        <span className="subtitle">Change</span>
      </div>
    ),
    accessor: 'CHANGE7DAYS',
    Cell: row => (
      <div className="change rt-tbody-item">
        <div className="change__pct">
          <Value value={row.original.CHANGE7DAYS} suffix="%" />
        </div>
      </div>
    ),
    // width: 100
  },
  // {
  //     Header: () =>
  //         <div className="rt-thead-item">
  //             <span>Chart</span>
  //             <span>7D change</span>
  //         </div>,
  //     accessor: 'CHANGE7DAYS',
  //     Cell: row => (
  //         <div className="chart rt-tbody-item">
  //             {
  //                  storeArray.indexOf(row.original.ID) == -1 ?
  //                     storeArray.push(row.original.ID) && loadArray.push(row.original.ID)
  //                         :
  //                         false
  //             }
  //             <SparkChart chartRange={ '7d' } cryptoID={ row.original.ID }  />
  //         </div>
  //     ),
  //     width: 175
  // },
  {
    Header: () => (
      <div className="rt-thead-item">
        <span className="title">Share</span>
        <span className="subtitle">Market</span>
      </div>
    ),
    accessor: 'SHARE',
    Cell: row => (
      <div className="share rt-tbody-item">
        <Value value={row.original.SHARE * 100} suffix="%" />
      </div>
    ),
    // width: 130
  },
];

export { tableColumns };
