import React from 'react';

import { Layout, Seo } from 'components';
import { PageHeader, MarketTable } from 'sections';

const MarketPage = ({ pageContext: { SSR } }) => (
  <>
    <Seo
      title={`Crypto market in real time | Coinrate.com${
        !SSR.ssrPage ? '' : ` (Page ${SSR.ssrPage})`
      }`}
      desc={`View the full list of all cryptocurrencies. Compare cryptocurrencies to make best investing decisions ${
        !SSR.ssrPage ? '' : ` (Page ${SSR.ssrPage})`
      }`}
    />
    <Layout>
      <PageHeader
        title="Cryptocurrency prices in&nbsp;real&nbsp;time"
        type="market"
        tag="h1"
        SSR={SSR}
      />
      <MarketTable SSR={SSR} />
    </Layout>
  </>
);

export default MarketPage;
