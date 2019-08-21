import React from 'react';

import { Layout, Seo, AD } from 'components';
import { DetailedCrypto, CryptoMarkets, PageHeader } from 'sections';

const Crypto = ({ pageContext: { SSR } }) => {
  const { slug, ticker, name } = SSR;

  return (
    <>
      <Seo
        title={`${name} (${ticker}) price, charts and info | Coinrate`}
        desc={`Find out today's ${ticker} price in USD 📈 Follow the live price of ${name} (${ticker}),
        charts 📊, history, stocks, and other market data on Coinrate`}
      />
      <Layout page="crypto">
        <DetailedCrypto SSR={SSR} />
        <PageHeader
          title={`${name} exchange rates`}
          type="symbol-markets"
          SSR={SSR}
        />
        <CryptoMarkets symbol={slug} />
      </Layout>
      <AD symbol={slug} />
    </>
  );
};

export default Crypto;
