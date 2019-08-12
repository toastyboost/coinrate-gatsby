import React from 'react';
import { withGlobalStats } from 'store/hocs';

import { PageHeaderWrap, PageTitle, PageDescription } from './styles';

import { Value } from 'components';

const BlockDescription = ({ GlobalStats, type }) => {
  const { isLoading, data } = GlobalStats;

  const MarketData = () => (
    <span>
      We are tracking <b>{!isLoading && data.CURRENCIES}</b> crypto{' '}
      <b>{!isLoading && data.MARKETS}</b> markets and{' '}
      <b>{!isLoading && data.EXCHANGES}</b> exchanges
    </span>
  );

  const CurrencyData = () => (
    <span>
      We have <b>{!isLoading && data.CURRENCIES}</b> cryptocurrencies with
      <b>
        &nbsp;
        {!isLoading && <Value value={data.CAP} />}
        &nbsp;
      </b>
      total capitalization
    </span>
  );

  const SymbolMarketsData = () => (
    <span>
      We are tracking <b>{!isLoading && data.MARKETS}</b> markets in{' '}
      <b>{!isLoading && data.EXCHANGES}</b> exchanges
    </span>
  );

  return type === 'market' ? (
    <MarketData />
  ) : type === 'currency' ? (
    <CurrencyData />
  ) : type === 'symbol-markets' || type === 'exchanges' ? (
    <SymbolMarketsData />
  ) : null;
};

const Description = withGlobalStats(BlockDescription);

const PageHeader = ({ title, sub = '', type, tag, SSR }) => {
  const { ssrPage } = SSR;

  return (
    <PageHeaderWrap>
      <PageTitle as={tag === 'h1' ? 'h1' : 'div'}>
        {title}{' '}
        {sub ? (
          <em>
            {sub}
            {!ssrPage || type !== 'exchanges' ? '' : ` (Page ${ssrPage})`}
          </em>
        ) : (
          ''
        )}{' '}
        {!ssrPage || type === 'exchanges' ? '' : `(Page ${ssrPage})`}
      </PageTitle>
      <PageDescription>
        <Description type={type} />
      </PageDescription>
    </PageHeaderWrap>
  );
};

export { PageHeader };
