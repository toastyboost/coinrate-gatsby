import React from 'react';

import {
  Sparklines,
  SparklinesReferenceLine,
  SparklinesCurve,
  SparklinesBars,
} from 'react-sparklines';

import { Loader } from 'components';
import { withSymbolChart } from 'store/hocs';

import { SparkContainer } from './styles';

const Chart = ({ symbolChart, symbol, isRef, className }) => {
  const chartData = symbolChart[symbol];

  if (!chartData) return <Loader />;

  const sparkData = chartData
    .filter((item, i) => i % 4 === 0)
    .map(({ PRICE }) => PRICE);

  return (
    <SparkContainer className={className}>
      <Sparklines data={sparkData}>
        <SparklinesCurve color="var(--blue)" />
        <SparklinesBars style={{ fill: 'var(--blue)', fillOpacity: '.1' }} />
        <SparklinesReferenceLine
          type="avg"
          style={{
            stroke: !isRef ? 'transparent' : 'var(--green)',
            strokeOpacity: 0.5,
            strokeDasharray: '2, 2',
          }}
        />
      </Sparklines>
    </SparkContainer>
  );
};

const SparkChart = withSymbolChart(Chart);

export { SparkChart };
