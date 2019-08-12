import React, { useEffect, useState } from 'react';
import { compose } from 'redux';

import { withSymbol, withSymbolChart, useInterval } from 'store/hocs';
import { updateInterval } from 'helpers/constants';

import { Header } from './Header';
import { Chart } from './Chart';
import { BlockWrap } from './styles';

const Block = ({
  SSR,
  getSymbol,
  getSymbolChart,
  symbolChart = [],
  symbolData = [],
  dispatch,
}) => {
  const [isReload, reloadTimer] = useState(false);
  const [activeRange, setRange] = useState('7d');

  const { slug } = SSR;

  useEffect(() => {
    dispatch(getSymbol(slug));
    dispatch(getSymbolChart(slug, activeRange));
  }, []);

  useInterval(() => {
    dispatch(getSymbol(slug));
    dispatch(getSymbolChart(slug, activeRange));

    reloadTimer(false);
  }, updateInterval);

  const chartData = symbolChart[slug];
  const blockData = symbolData[slug];

  return (
    <>
      {blockData && <Header data={blockData} />}
      <BlockWrap>
        <Chart
          SSR={SSR}
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
