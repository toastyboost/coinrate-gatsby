import React from 'react';
import { withGlobalStats } from 'store/hocs';

import { PageHeaderWrap, PageTitle, PageDescription } from './styles';

import { Value } from 'components';

const BlockDescription = ({ GlobalStats, type }) => {
  const { isLoading, data } = GlobalStats;

  if (isLoading) return false;

  const { CURRENCIES, EXCHANGES, MARKETS, CAP } = data;

  const MarketData = () => (
    <span>
      We are tracking <b>{CURRENCIES}</b> crypto <b>{MARKETS}</b> markets and{' '}
      <b>{EXCHANGES}</b> exchanges
    </span>
  );

  const CurrencyData = () => (
    <span>
      We have <b>{CURRENCIES}</b> cryptocurrencies with
      <b>
        &nbsp;
        <Value value={CAP} />
        &nbsp;
      </b>
      total capitalization
    </span>
  );

  const SymbolMarketsData = () => (
    <span>
      We are tracking <b>{MARKETS}</b> markets in <b>{EXCHANGES}</b> exchanges
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

const PageHeader = ({ title, sub = '', type, tag }) => (
  <PageHeaderWrap>
    <PageTitle as={tag === 'h1' ? 'h1' : 'div'}>
      {title} {sub ? <em>{sub}</em> : ''}
    </PageTitle>
    <PageDescription>
      <Description type={type} />
    </PageDescription>
  </PageHeaderWrap>
);

export { PageHeader };
