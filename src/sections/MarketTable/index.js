import React, { useEffect } from 'react';
import { compose } from 'redux';
import { withMarketData, withSymbolChart } from 'store/hocs';

import { Table } from 'components';

import { MarketTableContainer } from './styles';
import { tableColumns } from './columns';

const Block = ({ getMarketData, getSymbolChart, start, limit, data }) => {
  useEffect(() => {
    getMarketData({ start, limit, withCharts: true });
    getMarketData({});
  }, []);

  if (!data) return false;

  return (
    <MarketTableContainer>
      <Table
        columns={tableColumns}
        tableData={data}
        pageSize={30}
        fetchCharts={getSymbolChart}
      />
    </MarketTableContainer>
  );
};

const MarketTable = compose(
  withMarketData,
  withSymbolChart
)(Block);

export { MarketTable };
