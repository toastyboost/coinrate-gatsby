import React from 'react';

import { Layout, Seo, AD } from 'components';
import { DetailedCrypto, CryptoMarkets, PageHeader } from 'sections';

const Crypto = ({ pageContext: { slug, ticker, name } }) => (
  <>
    <Seo
      title={`${name} (${ticker}) realtime price chart (USD)`}
      desc={`Find out latest price of ${name} (${ticker}), its volume, market cap, supply, historical high's and low's`}
    />
    <Layout page="crypto">
      <DetailedCrypto symbol={slug} />
      <PageHeader title={`${name} exchange rates`} type="symbol-markets" />
      <CryptoMarkets symbol={slug} />
    </Layout>
    <AD symbol={slug} />
  </>
);

export default Crypto;
