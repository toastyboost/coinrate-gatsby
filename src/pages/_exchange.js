import React from 'react';

import { Layout, Seo } from 'components';
import { PageHeader, ExchangeMarkets } from 'sections';

import { GlobalStyles } from 'styles';

const MarketPage = ({ pageContext: { slug, name } }) => (
  <>
    <Seo
      title={`${name} exchange listings | Coinrate.com`}
      desc={`View ${name} market listings, today price changes and volumes for all available crypti exchange`}
    />
    <GlobalStyles />
    <Layout>
      <PageHeader title={name} sub="exchange" type="exchanges" tag="h1" />
      <ExchangeMarkets name={slug} />
    </Layout>
  </>
);

export default MarketPage;
