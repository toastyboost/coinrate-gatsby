import React, { useEffect, useState } from 'react';
import { compose } from 'redux';
import { withSymbol, withSymbolChart, useInterval } from 'store/hocs';
import { updateInterval } from 'helpers/constants';

import { Header } from './Header';
import { Chart } from './Chart';

import { BlockWrap } from './styles';

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

  if (!symbolData) return false;

  return (
    <>
      <Header data={symbolData} />
      <BlockWrap>
        <Chart
          chartData={chartData}
          symbolData={symbolData}
          isReloaded={isReload}
        />
      </BlockWrap>
    </>
  );
};

const DetailedCrypto = compose(
  withSymbol,
  withSymbolChart
)(Block);

export { DetailedCrypto };
