import React from 'react';

import { Value } from 'components';
import { CountryNames } from 'helpers/utils';

const tableColumns = [
  {
    Header: () => (
      <div className="rt-thead-item">
        <span />
        <span className="subtitle">#</span>
      </div>
    ),
    Cell: row => <div className="rank rt-tbody-item">{row.original.RANK}</div>,
    accessor: 'RANK',
    width: 42,
  },
  {
    Header: () => (
      <div className="rt-thead-item">
        <span className="title">Exchange</span>
        <span className="subtitle">name and country</span>
      </div>
    ),
    accessor: 'NAME',
    width: 300,
    Cell: row => (
      <a href={`/exchanges/${row.original.NAME.toLowerCase()}/`}>
        <div className="exchange rt-tbody-item">
          <div
            className="exchange__img"
            style={{
              backgroundImage: `url("https://coinrate.com/static/flags/round/${
                row.original.COUNTRY
              }.svg?v=1")`,
            }}
          />
          <div className="exchange__name">
            <span className="ticker">{row.original.NAME}</span>
            <span className="name">{CountryNames[row.original.COUNTRY]}</span>
          </div>
        </div>
      </a>
    ),
  },
  {
    Header: () => (
      <div className="rt-thead-item">
        <span className="title">volume</span>
        <span className="subtitle">todays</span>
      </div>
    ),
    accessor: 'VOLUME24HOUR',
    width: 300,
    Cell: row => (
      <div className="volume rt-tbody-item">
        <Value value={row.original.VOLUME24HOUR} prefix="$" />
      </div>
    ),
  },
  {
    Header: () => (
      <div className="rt-thead-item">
        <span className="title">Markets</span>
        <span className="subtitle">available</span>
      </div>
    ),
    accessor: 'MARKETS',
    width: 260,
    Cell: row => (
      <div className="rt-tbody-item">
        <Value value={row.original.MARKETS} type="simple" />
      </div>
    ),
  },
  {
    Header: () => (
      <div className="rt-thead-item">
        <span className="title">Share</span>
        <span className="subtitle">in market</span>
      </div>
    ),
    accessor: 'SHARE',
    width: 260,
    Cell: row => (
      <div className="rt-tbody-item">
        <Value value={row.original.VOLUME24HOURPCT * 10} suffix="%" />
      </div>
    ),
  },
];

export { tableColumns };
