import React, { useState, useEffect } from 'react';

import { RangeContainer, RangeItem } from './styles';
import { timeRanges } from 'helpers/constants';

import { withSymbolChart } from 'store/hocs';

const RangeSelector = ({ className, getSymbolChart, symbol }) => {
  const [activeRange, setRange] = useState(timeRanges[1]);

  useEffect(() => {
    getSymbolChart(symbol, activeRange);
  }, [activeRange]);

  return (
    <RangeContainer className={className}>
      {timeRanges.map((range, key) => (
        <RangeItem
          key={key}
          isActive={activeRange === range ? true : false}
          onClick={() => setRange(range)}
        >
          {range}
        </RangeItem>
      ))}
    </RangeContainer>
  );
};

const SymbolRangeSelector = withSymbolChart(RangeSelector);

export { SymbolRangeSelector };
