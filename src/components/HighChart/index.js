import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { updateIntervalSecs } from 'helpers/constants';

import { ChartContainer, UpdateCounter } from './styles';
import { setConfig } from './constants';

const Counter = isReloaded => {
  const [seconds, setSeconds] = useState(updateIntervalSecs);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(s => (s > 0 ? s - 1 : updateIntervalSecs));
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [seconds]);

  useEffect(() => {
    setSeconds(0);
  }, [isReloaded]);

  return <UpdateCounter>{seconds}</UpdateCounter>;
};

const HighChart = ({ data, isReloaded }) => {
  return (
    <ChartContainer className="Chart">
      <Counter isReloaded={isReloaded} />
      <HighchartsReact
        highcharts={Highcharts}
        options={setConfig(data)}
        immutable={true}
        domProps={{
          className: 'Chart__series',
        }}
      />
    </ChartContainer>
  );
};

export { HighChart };
