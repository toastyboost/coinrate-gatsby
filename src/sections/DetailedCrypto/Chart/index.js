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
  ChartAbout,
} from './styles';

import { dataItems } from '../constants';

const MomentOptions = {
  format: 'MM-DD-YYYY',
  unix: true,
};

const Chart = ({
  SSR,
  chartData,
  symbolData,
  isReloaded,
  setRange,
  activeRange,
}) => {
  const { name, ticker, slug, about } = SSR;
  return (
    <ChartContainer>
      <ChartControls>
        <ChartTitle>
          {name} ({ticker})
        </ChartTitle>
        <SymbolRangeSelector
          symbol={slug}
          setRange={setRange}
          activeRange={activeRange}
        />
      </ChartControls>
      <ChartData>
        {symbolData &&
          dataItems.map(({ title, value, color, prefix, isMobile }, key) => (
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
      <ChartAbout>
        <h2>About {name}</h2> {about}
      </ChartAbout>
    </ChartContainer>
  );
};

export { Chart };
