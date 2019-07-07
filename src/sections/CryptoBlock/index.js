import React, { useEffect } from 'react';

import {
  BlockContainer,
  BlockHeader,
  BlockFooter,
  CryptoIcon,
  CryptoName,
  CryptoLink,
  CriptoTicker,
  CryptoPrice,
  CryptoChange,
  CryptoItem,
  CryptoTitle,
  CryptoValue,
} from './styles';

import { withSymbol, withSymbolChart } from 'store/hocs';

import { Value, Chart } from 'components';
import { dataItems } from './constants';

const Block = ({ symbol, getSymbol, selectSymbol }) => {
  useEffect(() => {
    getSymbol(symbol);
  }, []);

  const data = selectSymbol[symbol];

  if (!data) return false;

  const { ID, NAME, TICKER, PRICE, CHANGE24HOUR } = data;

  return (
    <BlockContainer>
      <BlockHeader>
        <CryptoIcon id={ID} ticker={TICKER} />
        <CryptoLink>
          <CriptoTicker>{TICKER}</CriptoTicker>
          <CryptoName>{NAME}</CryptoName>
        </CryptoLink>
        <CryptoPrice>
          <Value value={PRICE} prefix="$" />
        </CryptoPrice>
        <CryptoChange>
          <Value value={CHANGE24HOUR} suffix="%" />
        </CryptoChange>
      </BlockHeader>
      <CryptoChart symbol={symbol} />
      <BlockFooter>
        {dataItems.map(({ title, value, color, prefix }, key) => (
          <CryptoItem key={key}>
            <CryptoTitle>{title}</CryptoTitle>
            <CryptoValue color={color}>
              <Value value={data[value]} prefix={prefix} />
            </CryptoValue>
          </CryptoItem>
        ))}
      </BlockFooter>
    </BlockContainer>
  );
};

const CryptoBlock = withSymbol(Block);
const CryptoChart = withSymbolChart(Chart);

export { CryptoBlock };
