import React from 'react';

import { Value } from 'components';
import { CountryNames } from 'helpers/utils';

const exchangesColumns = [
  {
    Header: '#',
    accessor: 'RANK',
  },
  {
    Header: () => (
      <>
        <span className="title">Exchange</span>
        <span className="subtitle">name and country</span>
      </>
    ),
    Cell: ({
      row: {
        original: { EXCHANGENAME, COUNTRY },
      },
    }) => (
      <a
        href={`/exchanges/${EXCHANGENAME}/`}
        className="exchange"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div
          className="exchange__img"
          style={{
            backgroundImage: `url("https://coinrate.com/static/flags/round/${COUNTRY}.svg?v=1")`,
          }}
        />
        <div className="exchange__name">
          <span className="ticker">{EXCHANGENAME}</span>
          <span className="name">{CountryNames[COUNTRY]}</span>
        </div>
      </a>
    ),
    accessor: 'EXCHANGENAME',
  },
  {
    Header: () => (
      <>
        <span className="title">volume</span>
        <span className="subtitle">for 24 hour</span>
      </>
    ),
    Cell: ({ cell: { value } }) => <Value value={value} prefix="$" />,
    accessor: 'EXCHANGEVOLUME',
  },
  {
    Header: () => (
      <>
        <span className="title">Markets</span>
        <span className="subtitle">available</span>
      </>
    ),
    Cell: ({ cell: { value } }) => <Value value={value} type="simple" />,
    accessor: 'EXCHANGEMARKETS',
  },
  {
    Header: () => (
      <>
        <span className="title">Share</span>
        <span className="subtitle">in market</span>
      </>
    ),
    Cell: ({ cell: { value } }) => <Value value={value} suffix="%" />,
    accessor: 'EXCHANGESHARE',
  },
];

export { exchangesColumns };
