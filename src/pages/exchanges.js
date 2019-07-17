import React from 'react';

import { Layout, Seo } from 'components';
import { PageHeader, ExchangesTable } from 'sections';

import { GlobalStyles } from 'styles';

const MarketPage = () => (
  <>
    <Seo
      title={'Cryptocurrency exchanges, markets and pairs | Coinrate.com'}
      desc={
        'Track latest cryptocurrency exchanges listings, price changes volumes.'
      }
      slug={'/exchanges'}
    />
    <GlobalStyles />
    <Layout>
      <PageHeader title="Cryptocurrency exchanges" type="exchanges" tag="h1" />
      <ExchangesTable />
    </Layout>
  </>
);

export default MarketPage;
