import React from 'react';
import { Value, SymbolIcon } from 'components';
import { availiableCurrenciesAssets } from 'helpers/constants';

const columns = [
  {
    Header: '#',
    accessor: 'RANK',
  },
  {
    Header: () => (
      <>
        <span className="title">exchange</span>
        <span className="subtitle">name</span>
      </>
    ),
    Cell: ({
      row: {
        original: { FSYM },
      },
    }) => (
      <a
        href={`/exchanges/${FSYM}/`}
        className="exchange"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="title">{FSYM}</span>
        <span className="subtitle">exchange</span>
      </a>
    ),
    accessor: 'FSYM',
  },
  {
    Header: () => (
      <>
        <span className="title">currency</span>
        <span className="subtitle">name</span>
      </>
    ),
    Cell: ({
      row: {
        original: { TSYMID, TSYM },
      },
    }) => {
      const isCrypto = availiableCurrenciesAssets.includes(
        TSYMID.toUpperCase()
      );

      return !isCrypto ? (
        <a
          href={`/cryptocurrencies/${TSYMID}/`}
          className="crypto"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SymbolIcon
            className="crypto__img"
            ticker={TSYM}
            id={TSYMID}
            name={TSYMID}
          />
          <div className="symbol">
            <span className="title">{TSYMID}</span>
            <span className="subtitle">crypto</span>
          </div>
        </a>
      ) : (
        <div className="crypto">
          <SymbolIcon
            className="crypto__img"
            ticker={TSYM}
            id={TSYMID}
            name={TSYMID}
          />
          <div className="symbol">
            <span className="title">{TSYMID}</span>
            <span className="subtitle">currency</span>
          </div>
        </div>
      );
    },
    accessor: 'TSYMID',
  },
  {
    Header: () => (
      <>
        <span className="title">Cap</span>
        <span className="subtitle">market</span>
      </>
    ),
    Cell: ({ value }) => <Value value={value} prefix="$" />,
    accessor: 'PRICEUSD',
  },
  {
    Header: () => (
      <>
        <span className="title">purchase</span>
        <span className="subtitle">price</span>
      </>
    ),
    Cell: ({ value }) => <Value value={value} prefix="$" />,
    accessor: 'PRICECRYPTO',
  },
  {
    Header: () => (
      <>
        <span className="title">Volume</span>
        <span className="subtitle">for 24 hours</span>
      </>
    ),
    Cell: ({ value }) => <Value value={value} prefix="$" />,
    accessor: 'MARKETVOLUME24HOUR',
  },
];

export { columns };
