import React from 'react';

import { Layout, Table } from 'components';
import { PageHeader, CryptoBlock } from 'sections';
import { withMarketData } from 'store/hocs';

import { GlobalStyles, FontsStyles, TableStyles } from 'styles';

const MarketTable = withMarketData(Table);

const Index = () => (
  <>
    <GlobalStyles />
    <FontsStyles />
    <TableStyles />
    <Layout>
      <PageHeader title="Cryptocurrency prices in real time" type="market" />
      <CryptoBlock symbol="bitcoin" />
      <PageHeader title="Crypto market" type="currency" />
      <MarketTable start="0" limit="30" />
    </Layout>
  </>
);

export default Index;
