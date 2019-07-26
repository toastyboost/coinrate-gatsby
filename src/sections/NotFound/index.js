import React, { useEffect } from 'react';
import { withMarketData } from 'store/hocs';

import {
  NotFoundWrap,
  NotFoundTitle,
  NotFoundDesc,
  NotFoundRelevant,
  NotFoundCta,
} from './styles';

import { SymbolCard } from 'components';

const Page = ({ getMarketData, data }) => {
  useEffect(() => {
    getMarketData({ start: 0, limit: 8, withCharts: true });
  }, []);

  return (
    <NotFoundWrap>
      <NotFoundTitle>Ooops... Page not found</NotFoundTitle>
      <NotFoundDesc>
        We are sorry, but the page you are looking for is not found or does not
        exist
      </NotFoundDesc>
      <NotFoundRelevant>
        {data.map((item, key) => (
          <SymbolCard data={item} key={key} />
        ))}
      </NotFoundRelevant>
      <NotFoundCta id="bitcoin" />
    </NotFoundWrap>
  );
};

const NotFound = withMarketData(Page);

export { NotFound };
