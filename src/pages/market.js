import React from 'react';

import { Layout, Seo } from 'components';
import { PageHeader, MarketTable } from 'sections';

import { GlobalStyles } from 'styles';

const seoData = {
  title: 'Crypto market in real time | Coinrate.com',
  desc:
    'View the full list of all cryptocurrencies. Compare cryptocurrencies to make best investing decisions',
  slug: '/market',
};

const MarketPage = () => (
  <>
    <Seo {...seoData} />
    <GlobalStyles />
    <Layout>
      <PageHeader title="Crypto market" type="currency" tag="h1" />
      <MarketTable />
    </Layout>
  </>
);

export default MarketPage;
