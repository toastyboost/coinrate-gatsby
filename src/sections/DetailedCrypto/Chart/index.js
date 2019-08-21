import React from 'react';

import { HighChart } from 'components';

import { ChartContainer, ChartAbout } from './styles';

// import { dataItems } from '../constants';

// const MomentOptions = {
//   format: 'MM-DD-YYYY',
//   unix: true,
// };

const Chart = ({ SSR, chartData }) => {
  const { name, about } = SSR;
  return (
    <ChartContainer>
      {/* <ChartControls>
        <ChartTitle>
          {name} ({ticker})
        </ChartTitle>

      </ChartControls> */}
      {/* <ChartData>
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
      </ChartData> */}
      {chartData && <HighChart data={chartData} />}
      <ChartAbout>
        <h2>About {name}</h2> {about}
      </ChartAbout>
    </ChartContainer>
  );
};

export { Chart };
