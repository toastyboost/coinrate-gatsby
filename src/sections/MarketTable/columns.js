import React, { useMemo } from 'react';
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

export { columns };
