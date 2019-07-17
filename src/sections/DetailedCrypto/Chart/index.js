import React from 'react';
import Moment from 'react-moment';

import { HighChart, Value, SymbolRangeSelector } from 'components';

import {
  ChartContainer,
  ChartControls,
  ChartTitle,
  ChartData,
  CryptoItem,
  CryptoTitle,
  CryptoValue,
  ChartRange,
} from './styles';

import { dataItems } from '../constants';

const MomentOptions = {
  format: 'MM-DD-YYYY',
  unix: true,
};

const Chart = ({ chartData, symbolData, isReloaded }) => {
  const { ID, NAME, TICKER } = symbolData;

  return (
    <ChartContainer>
      <ChartControls>
        <ChartTitle>
          {NAME} ({TICKER}/USD) price chart in real time
        </ChartTitle>
        <SymbolRangeSelector symbol={ID} />
      </ChartControls>
      <ChartData>
        {dataItems.map(({ title, value, color, prefix, isMobile }, key) => (
          <CryptoItem key={key} isMobile={isMobile}>
            <CryptoTitle>{title}</CryptoTitle>
            <CryptoValue color={color}>
              <Value
                value={symbolData[value]}
                prefix={prefix}
                isReloaded={isReloaded}
              />
            </CryptoValue>
          </CryptoItem>
        ))}
        {chartData && (
          <ChartRange>
            from
            <Moment {...MomentOptions}>{chartData[0].TIMESTAMP}</Moment>
            to
            <Moment {...MomentOptions}>
              {chartData[chartData.length - 1].TIMESTAMP}
            </Moment>
          </ChartRange>
        )}
      </ChartData>
      {chartData && <HighChart data={chartData} />}
    </ChartContainer>
  );
};

export { Chart };
