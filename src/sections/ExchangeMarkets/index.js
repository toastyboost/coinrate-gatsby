import React, { useEffect } from 'react';

import { ExchangeMarketsContainer } from './styles';

import { withExchangeMarkets } from 'store/hocs';

import { Table } from 'components';
import { ExchangeMarketsColumns } from './columns';

const Block = ({
  name,
  dispatch,
  getExchangeMarkets,
  exchangeMarketsData,
  SSR = {},
}) => {
  useEffect(() => {
    dispatch(getExchangeMarkets(name));
  }, []);

  const { ssrData } = SSR;

  const columns = React.useMemo(() => ExchangeMarketsColumns, []);
  const data = process.browser
    ? React.useMemo(() => exchangeMarketsData, [exchangeMarketsData])
    : ssrData;

  return (
    <ExchangeMarketsContainer>
      {data && <Table columns={columns} data={data} pageSize={30} SSR={SSR} />}
    </ExchangeMarketsContainer>
  );
};

const ExchangeMarkets = withExchangeMarkets(Block);

export { ExchangeMarkets };
