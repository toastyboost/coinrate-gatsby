import React, { useEffect } from 'react';
// rename to symbol
import { MarketTableContainer, BlockWrap, MarketCta } from './styles';

import { withSymbolMarkets } from 'store/hocs';

import { Table } from 'components';
import { tableColumns } from './columns';

const Block = ({ symbol, selectSymbolMarkets, getSymbolMarkets }) => {
  useEffect(() => {
    getSymbolMarkets(symbol);
  }, []);

  const data = selectSymbolMarkets[symbol];

  if (!data) return false;

  return (
    <MarketTableContainer>
      <BlockWrap>
        <Table columns={tableColumns} data={data} pageSize={15} />
        <MarketCta id={symbol} />
      </BlockWrap>
    </MarketTableContainer>
  );
};

const CryptoMarkets = withSymbolMarkets(Block);

export { CryptoMarkets };
