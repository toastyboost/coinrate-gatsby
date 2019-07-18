import React, { useState, useEffect } from 'react';
import { compose } from 'redux';

import {
  BlockContainer,
  BlockHeader,
  BlockFooter,
  CryptoStats,
  CryptoIcon,
  CryptoName,
  CryptoLink,
  CriptoTicker,
  CryptoPrice,
  CryptoChange,
  CryptoItem,
  CryptoTitle,
  CryptoValue,
  CryptoRangeSelector,
} from './styles';

import { withSymbol, withSymbolChart, useInterval } from 'store/hocs';

import { Value, HighChart } from 'components';
import { updateInterval } from 'helpers/constants';
import { dataItems } from './constants';

const Block = ({
  symbol,
  getSymbol,
  getSymbolChart,
  selectSymbol,
  selectSymbolChart,
}) => {
  const [isReload, reloadTimer] = useState(false);

  useEffect(() => {
    getSymbol(symbol);
    getSymbolChart(symbol);
  }, []);

  useInterval(() => {
    getSymbol(symbol);
    getSymbolChart(symbol);

    reloadTimer(true);
    reloadTimer(false);
  }, updateInterval);

  const symbolData = selectSymbol[symbol];
  const chartData = selectSymbolChart[symbol];

  if (!symbolData || !chartData) return false;

  const { ID, NAME, TICKER, PRICE, CHANGE24HOUR } = symbolData;

  return (
    <BlockContainer>
      <BlockHeader>
        <CryptoStats href={`/cryptocurrencies/${ID}/`}>
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
        </CryptoStats>
        <CryptoRangeSelector symbol={ID} />
      </BlockHeader>
      <HighChart data={chartData} isReloaded={isReload} />
      <BlockFooter>
        {dataItems.map(({ title, value, color, prefix }, key) => (
          <CryptoItem key={key}>
            <CryptoTitle>{title}</CryptoTitle>
            <CryptoValue color={color}>
              <Value value={symbolData[value]} prefix={prefix} />
            </CryptoValue>
          </CryptoItem>
        ))}
      </BlockFooter>
    </BlockContainer>
  );
};

const CryptoBlock = compose(
  withSymbolChart,
  withSymbol
)(Block);

export { CryptoBlock };
