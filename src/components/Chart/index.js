import React, { useEffect } from 'react';
import ReactHighcharts from 'react-highcharts';

import { ChartContainer } from './styles';
import { setConfig } from './constants';

const Chart = ({ symbol, getSymbolChart, selectSymbolChart }) => {
  useEffect(() => {
    getSymbolChart(symbol);
  }, []);

  const data = selectSymbolChart[symbol];

  if (!data) return false;

  return (
    <ChartContainer>
      <ReactHighcharts
        config={setConfig(data)}
        domProps={{
          className: 'Chart__series',
        }}
      />
    </ChartContainer>
  );
};

export { Chart };
