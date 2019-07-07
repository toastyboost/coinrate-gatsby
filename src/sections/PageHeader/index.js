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

  return type == 'market' ? (
    <MarketData />
  ) : type == 'currency' ? (
    <CurrencyData />
  ) : null;
};

const Description = withGlobalStats(BlockDescription);

const PageHeader = ({ title, type }) => (
  <PageHeaderWrap>
    <PageTitle>{title}</PageTitle>
    <PageDescription>
      <Description type={type} />
    </PageDescription>
  </PageHeaderWrap>
);

export { PageHeader };
