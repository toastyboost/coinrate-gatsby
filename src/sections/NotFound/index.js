import React, { useEffect } from 'react';

import { compose } from 'redux';

import { withMarketData, withSymbolChart } from 'store/hocs';

import {
  NotFoundWrap,
  NotFoundTitle,
  NotFoundDesc,
  NotFoundRelevant,
  NotFoundCta,
} from './styles';

import { SymbolCard } from 'components';

const Page = ({ getMarketData, marketData, getSymbolChart, dispatch }) => {
  useEffect(() => {
    getMarketData({ start: 0, limit: 8, withCharts: true });
  }, []);

  useEffect(() => {
    if (marketData.length) {
      const symbols = marketData.map(item => item.original.ID);

      dispatch(getSymbolChart(symbols, '7d'));
    }
  }, [marketData]);

  return (
    <NotFoundWrap>
      <NotFoundTitle>Ooops... Page not found</NotFoundTitle>
      <NotFoundDesc>
        We are sorry, but the page you are looking for is not found or does not
        exist
      </NotFoundDesc>
      <NotFoundRelevant>
        {marketData &&
          marketData.map((item, key) => <SymbolCard data={item} key={key} />)}
      </NotFoundRelevant>
      <NotFoundCta id="bitcoin" />
    </NotFoundWrap>
  );
};

const NotFound = compose(
  withMarketData,
  withSymbolChart
)(Page);

export { NotFound };
