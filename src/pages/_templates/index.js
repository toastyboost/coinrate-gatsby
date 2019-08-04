import React from 'react';

import { Layout, Seo } from 'components';
import { PageHeader, MarketTable } from 'sections';

const seoData = {
  title: 'Crypto market in real time | Coinrate.com',
  desc:
    'View the full list of all cryptocurrencies. Compare cryptocurrencies to make best investing decisions',
};

const MarketPage = ({ pageContext: { SSR } }) => (
  <>
    <Seo {...seoData} />
    <Layout>
      <PageHeader
        title="Cryptocurrency prices in&nbsp;real&nbsp;time"
        type="market"
        tag="h1"
      />
      <MarketTable SSR={SSR} />
    </Layout>
  </>
);

export default MarketPage;
