import React, { useEffect, useState } from 'react';
import { compose } from 'redux';

import { withSymbolChart, useInterval, withSymbol } from 'store/hocs';
import { updateInterval } from 'helpers/constants';
import { SymbolRangeSelector, Value } from 'components';

import { Chart } from './Chart';
import {
  BlockWrap,
  ChartContainer,
  Container,
  CryptoIcon,
  CryptoLink,
  CryptoPrice,
  CryptoChange,
  BlockHeader,
  CryptoStats,
} from './styles';

import { SymbolStats } from '../SymbolStats';

const Block = ({
  SSR,
  getSymbolChart,
  symbolChart = [],
  symbolData = [],
  dispatch,
}) => {
  const [activeRange, setRange] = useState('7d');

  const { slug, name, ticker } = SSR;

  useEffect(() => {
    dispatch(getSymbolChart(slug, activeRange));
  }, []);

  useInterval(() => {
    dispatch(getSymbolChart(slug, activeRange));
  }, updateInterval);

  const chartData = symbolChart[slug];
  const sData = symbolData[slug];

  return (
    <Container>
      <BlockWrap>
        <ChartContainer>
          <BlockHeader>
            <CryptoStats>
              <CryptoIcon ticker={ticker} id={slug} name={name} />
              <CryptoLink>
                {name} <em>({ticker})</em>
              </CryptoLink>
              <CryptoPrice>
                {sData && <Value value={sData.PRICE} prefix="$" />}
              </CryptoPrice>
              <CryptoChange>
                {sData && <Value value={sData.CHANGE24HOUR} suffix="%" />}
              </CryptoChange>
            </CryptoStats>

            <SymbolRangeSelector
              symbol={slug}
              setRange={setRange}
              activeRange={activeRange}
            />
          </BlockHeader>
          <Chart
            SSR={SSR}
            chartData={chartData}
            setRange={setRange}
            activeRange={activeRange}
          />
        </ChartContainer>
        <SymbolStats symbol={slug} />
      </BlockWrap>
    </Container>
  );
};

const DetailedCrypto = compose(
  withSymbol,
  withSymbolChart
)(Block);

export { DetailedCrypto };
