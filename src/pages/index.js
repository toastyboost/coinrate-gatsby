import React from 'react';

import { Layout, Seo } from 'components';
import { PageHeader, CryptoBlock, MarketTable } from 'sections';

import { GlobalStyles } from 'styles';

const seoData = {
  title:
    'Cryptocurrency Prices, Charts, Exchange Rates in real time | Coinrate.com',
  desc: `
    Cryptocurrency market explorer: find coins prices charts, exchange rates, news, bitcoin ATM map.
    Compare cryptocoins to make best trading decisions`,
  slug: '/',
};

const IndexPage = () => (
  <>
    <Seo {...seoData} />
    <GlobalStyles />
    <Layout>
      <PageHeader
        title="Cryptocurrency prices in real time"
        type="market"
        tag="h1"
      />
      <CryptoBlock symbol="bitcoin" />
      <PageHeader title="Crypto market" type="currency" />
      <MarketTable start="0" limit="30" />
    </Layout>
  </>
);

export default IndexPage;
