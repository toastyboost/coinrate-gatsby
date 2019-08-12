import React, { useMemo } from 'react';
import { ValueCounter, DirectionArrow } from './styles';

import {
  setFormat,
  setDirection,
  setSuffix,
  // setDecimals,
} from './helpers';

const Value = ({ value = 0, type, suffix, prefix }) => {
  const val = useMemo(() => setFormat(value, suffix, type), [
    value,
    suffix,
    type,
  ]);

  return type === 'triangle' ? (
    <DirectionArrow className="direction" direction={setDirection(value)} />
  ) : (
    <ValueCounter
      className="value"
      direction={setDirection(value)}
      suffix={setSuffix(value, suffix)}
    >
      {prefix}
      {val}
      {suffix}
    </ValueCounter>
  );
};

export { Value };
