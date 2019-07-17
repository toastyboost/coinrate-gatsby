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

const Chart = ({ selectSymbolChart, symbol, isRef }) => {
  const data = selectSymbolChart[symbol];

  if (!data) return <Loader />;

  const sparkData = data
    .filter((item, i) => i % 4 === 0)
    .map(({ PRICE }) => PRICE);

  return (
    <SparkContainer>
      <Sparklines data={sparkData}>
        <SparklinesCurve color="var(--blue)" />
        <SparklinesBars style={{ fill: 'var(--blue)', fillOpacity: '.2' }} />
        <SparklinesReferenceLine
          type="avg"
          style={{
            stroke: isRef ? 'red' : 'transparent',
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
