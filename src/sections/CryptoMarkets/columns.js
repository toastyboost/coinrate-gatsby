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
        <span className="title">exchange</span>
        <span className="subtitle">name</span>
      </div>
    ),
    accessor: 'FSYM',
    Cell: row => (
      <a
        href={`/exchanges/${row.original.FSYM}/`}
        className="exchange rt-td-body"
      >
        <div className="ticker">{row.original.FSYM}</div>
        <div className="name">exchange</div>
      </a>
    ),
    width: 180,
  },
  {
    Header: () => (
      <div className="rt-thead-item">
        <span className="title">TO</span>
        <span className="subtitle">symbol</span>
      </div>
    ),
    accessor: 'TSYM',
    Cell: row => (
      <a
        href={`/cryptocurrencies/${row.original.TSYMID}/`}
        className="rt-td-body"
      >
        <div className="crypto rt-tbody-item">
          <div
            className="crypto__img"
            style={{
              backgroundImage: `url("https://coinrate.com/static/crypto/${
                row.original.TSYM
              }-${row.original.TSYMID}.svg?v=1")`,
            }}
          />
          <div className="crypto__name">
            <span className="ticker">{row.original.TSYMID}</span>
            <span className="name">{row.original.TSYM}</span>
          </div>
        </div>
      </a>
    ),
    width: 240,
  },
  {
    Header: () => (
      <div className="rt-thead-item">
        <span className="title">Currency</span>
        <span className="subtitle">purchase price</span>
      </div>
    ),
    Cell: row => (
      <div className="price rt-tbody-item">
        <Value value={row.original.PRICEUSD} prefix="$" />
      </div>
    ),
    accessor: 'PRICEUSD',
    width: 180,
  },
  {
    Header: () => (
      <div className="rt-thead-item">
        <span className="title">Crypto</span>
        <span className="subtitle">purchase price</span>
      </div>
    ),
    accessor: 'PRICE',
    Cell: row => (
      <div className="price rt-tbody-item">
        <Value value={row.original.PRICE} prefix={row.original.TSYM} />
      </div>
    ),
    width: 220,
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
  },
  {
    Header: () => (
      <div className="rt-thead-item">
        <span className="title">Volume</span>
        <span className="subtitle">for 24 hours</span>
      </div>
    ),
    accessor: 'VOLUME24HOUR',
    Cell: row => (
      <div className="volume rt-tbody-item">
        <Value value={row.original.VOLUME24HOUR} prefix="$" />
      </div>
    ),
  },
];

export { tableColumns };
