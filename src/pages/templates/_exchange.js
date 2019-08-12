import React from 'react';

import { Layout, Seo } from 'components';
import { PageHeader, ExchangeMarkets } from 'sections';

const MarketPage = ({ pageContext: { slug, name, SSR } }) => (
  <>
    <Seo
      title={`${name} exchange listings | Coinrate.com`}
      desc={`View ${name} market listings, today price changes and volumes for all available crypti exchange`}
    />

    <Layout>
      <PageHeader title={name} sub="exchange" type="exchanges" tag="h1" />
      <ExchangeMarkets name={slug} SSR={SSR} />
    </Layout>
  </>
);

export default MarketPage;
