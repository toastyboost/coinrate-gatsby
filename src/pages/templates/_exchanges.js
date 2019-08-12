import React from 'react';

import { Layout, Seo } from 'components';
import { PageHeader, ExchangesTable } from 'sections';

const MarketPage = ({ pageContext: { SSR } }) => (
  <>
    <Seo
      title={'Cryptocurrency exchanges, markets and pairs | Coinrate.com'}
      desc={
        'Track latest cryptocurrency exchanges listings, price changes volumes.'
      }
    />
    <Layout>
      <PageHeader
        title="Cryptocurrency exchanges"
        type="exchanges"
        tag="h1"
        SSR={SSR}
      />
      <ExchangesTable SSR={SSR} />
    </Layout>
  </>
);

export default MarketPage;
