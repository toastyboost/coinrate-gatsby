import React, { useEffect } from 'react';

import { withMarketData } from 'store/hocs';

import { Table } from 'components';

import { MarketTableContainer } from './styles';
import { tableColumns } from './columns';

const Block = ({ getMarketData, start, limit, data }) => {
  useEffect(() => {
    getMarketData(start, limit);
    getMarketData();
  }, []);

  if (!data) return false;

  return (
    <MarketTableContainer>
      <Table columns={tableColumns} data={data} pageSize={30} />
    </MarketTableContainer>
  );
};

const MarketTable = withMarketData(Block);

export { MarketTable };
