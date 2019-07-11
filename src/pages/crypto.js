import React from 'react';

import { Layout, Seo } from 'components';
import { DetailedCrypto, CryptoMarkets, PageHeader } from 'sections';

import { GlobalStyles } from '../styles';

const Crypto = ({ pageContext: { slug, ticker, name } }) => (
  <>
    <Seo
      title={`${name} (${ticker}) realtime price chart (USD)`}
      desc={`Find out latest price of ${name} (${ticker}), its volume, market cap, supply, historical high's and low's`}
      slug={`/cryptocurrencies/${slug}`}
    />
    <GlobalStyles />
    <Layout page="crypto">
      <DetailedCrypto symbol={slug} />
      <PageHeader
        title={`${name} exchange rates`}
        type="symbol-markets"
        tag="h1"
      />
      <CryptoMarkets symbol={slug} />
    </Layout>
  </>
);

export default Crypto;
