import React, { useEffect } from 'react';

import { ExchangeMarketsContainer } from './styles';

import { withExchangeMarkets } from 'store/hocs';

import { Table } from 'components';
import { tableColumns } from './columns';

const Block = ({ name, getExchangeMarkets, data }) => {
  useEffect(() => {
    getExchangeMarkets(name);
  }, []);

  if (!data) return false;

  return (
    <ExchangeMarketsContainer>
      <Table columns={tableColumns} tableData={data.data} />
    </ExchangeMarketsContainer>
  );
};

const ExchangeMarkets = withExchangeMarkets(Block);

export { ExchangeMarkets };
