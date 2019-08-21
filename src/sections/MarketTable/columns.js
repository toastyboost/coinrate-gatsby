import React from 'react';
import { Value, SparkChart, SymbolIcon } from 'components';

const marketColumns = [
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
        <SymbolIcon
          className="crypto__img"
          ticker={TICKER}
          id={ID}
          name={NAME}
        />
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
    Cell: ({ cell: { value } }) => <Value value={value} prefix="$" />,
    accessor: 'CAP',
  },
  {
    Header: () => (
      <>
        <span className="title">Volume</span>
        <span className="subtitle">today&apos;s</span>
      </>
    ),
    Cell: ({ cell: { value } }) => <Value value={value} prefix="$" />,
    accessor: 'VOLUME24HOUR',
  },
  {
    Header: () => (
      <>
        <span className="title">24h</span>
        <span className="subtitle">Change</span>
      </>
    ),
    Cell: ({ cell: { value } }) => <Value value={value} suffix="%" />,
    accessor: 'CHANGE24HOUR',
  },
  {
    Header: () => (
      <>
        <span className="title">7D</span>
        <span className="subtitle">Change</span>
      </>
    ),
    Cell: ({ cell: { value } }) => <Value value={value} suffix="%" />,
    accessor: 'CHANGE7DAYS',
  },
  {
    Header: () => (
      <>
        <span className="title">7D</span>
        <span className="subtitle">chart</span>
      </>
    ),
    Cell: ({ row }) => (
      <SparkChart className="chart" symbol={row.original.ID} isRef />
    ),
    accessor: 'CHART',
  },
  {
    Header: () => (
      <>
        <span className="title">Share</span>
        <span className="subtitle">Market</span>
      </>
    ),
    Cell: ({ cell: { value } }) => <Value value={value * 100} suffix="%" />,
    accessor: 'SHARE',
  },
];

export { marketColumns };
