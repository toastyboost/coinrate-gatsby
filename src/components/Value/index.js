import React from 'react';
import { ValueCounter, DirectionArrow } from './styles';

import {
  setFormat,
  setDirection,
  setPrefix,
  setSuffix,
  setDecimals,
} from './helpers';

const Value = ({ value, type, suffix, prefix, showSign }) => {
  const formatedValue = setFormat(value, showSign, suffix);

  return type === 'triangle' ? (
    <DirectionArrow className="direction" direction={setDirection(value)} />
  ) : (
    <ValueCounter
      className="value"
      direction={setDirection(value)}
      start={formatedValue - (formatedValue / 100) * 10}
      end={formatedValue}
      duration={0.5}
      separator=","
      useEasing={true}
      useGrouping={true}
      prefix={setPrefix(prefix)}
      suffix={setSuffix(value, suffix)}
      decimals={setDecimals(value, type, suffix)}
    />
  );
};

export { Value };
