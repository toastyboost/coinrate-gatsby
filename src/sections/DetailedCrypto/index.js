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
  symbolChart = [],
  symbolData = [],
  dispatch,
}) => {
  const [isReload, reloadTimer] = useState(false);
  const [activeRange, setRange] = useState('7d');

  useEffect(() => {
    dispatch(getSymbol(symbol));
    dispatch(getSymbolChart(symbol, activeRange));
  }, []);

  useInterval(() => {
    dispatch(getSymbol(symbol));
    dispatch(getSymbolChart(symbol, activeRange));

    reloadTimer(false);
  }, updateInterval);

  const chartData = symbolChart[symbol];
  const blockData = symbolData[symbol];

  if (!chartData) return false;

  return (
    <>
      <Header data={blockData} />
      <BlockWrap>
        <Chart
          chartData={chartData}
          symbolData={blockData}
          isReloaded={isReload}
          setRange={setRange}
          activeRange={activeRange}
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
