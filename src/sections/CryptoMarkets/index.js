import React, { useEffect } from 'react';
// rename to symbol
import { MarketTableContainer, BlockWrap, MarketCta } from './styles';

import { withSymbolMarkets } from 'store/hocs';

import { Table } from 'components';
import { columns } from './columns';

const Block = ({ symbol, symbolMarkets, getSymbolMarkets, dispatch }) => {
  useEffect(() => {
    dispatch(getSymbolMarkets(symbol));
  }, []);

  const data = symbolMarkets[symbol];

  if (!data) return false;

  return (
    <MarketTableContainer>
      <BlockWrap>
        <Table columns={columns} data={data} pageSize={15} noPageLinks />
        <MarketCta id={symbol} />
      </BlockWrap>
    </MarketTableContainer>
  );
};

const CryptoMarkets = withSymbolMarkets(Block);

export { CryptoMarkets };
