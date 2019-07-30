import React, { useEffect, useState } from 'react';
import { compose } from 'redux';
import { withMarketData, withSymbolChart } from 'store/hocs';

import { TableV7, Value } from 'components';

import { MarketTableContainer } from './styles';
// import { columns } from './columns';

const columns = [
  {
    Header: '#',
    accessor: 'RANK',
  },
];

const FD = [
  {
    RANK: 2,
  },
  {
    RANK: 12,
  },
];

const Block = ({ getMarketData, getSymbolChart, start, limit, marketData }) => {
  // const [isLoading, setLoading] = useState(true);

  // useEffect(() => {
  // getMarketData({ start, limit, withCharts: true });
  // getMarketData({});
  // }, []);

  // useEffect(() => {
  //   marketData.length < 1 && setLoading(false);
  // }, [marketData]);

  // const ids = new Set(SSR.map(d => d.ID));
  // const merged = [...SSR, ...data.filter(d => !ids.has(d.ID))];
  // if (isLoading) return false;
  // console.log('marketData', FD);

  return (
    <MarketTableContainer>
      <TableV7
        columns={columns}
        data={FD}
        // fetchCharts={getSymbolChart}
        // fetchData={getMarketData}
      />
    </MarketTableContainer>
  );
};

const MarketTable = compose()(Block);
// withMarketData,
// withSymbolChart

export { MarketTable };
