import React from 'react';

import { Value, SparkChart } from 'components';

import {
  CardWrap,
  CardBlock,
  CardSymbolIcon,
  CardHeader,
  CardFooter,
  CardInfo,
  CardTitle,
  CardChange7D,
  CardTicker,
} from './styles';

const SymbolCard = ({ data }) => {
  if (!data) return false;

  const { ID, TICKER, NAME, CHANGE7DAYS } = data;

  return (
    <CardWrap>
      <CardBlock href={`/cryptocurrencies/${ID}/`}>
        <CardHeader>
          <CardSymbolIcon ticker={TICKER} id={ID} />
          <CardInfo>
            <CardTicker>{TICKER}</CardTicker>
            <CardTitle>{NAME}</CardTitle>
          </CardInfo>
          <CardChange7D>
            <Value value={CHANGE7DAYS} suffix="%" showSign />
            <span className="text">in 7 days</span>
          </CardChange7D>
        </CardHeader>
        <CardFooter>
          <SparkChart symbol={ID} />
        </CardFooter>
      </CardBlock>
    </CardWrap>
  );
};

export { SymbolCard };
