import React from 'react';

import { IconWrap } from './styles';

const SymbolIcon = ({ className, ticker, id }) => (
  <IconWrap className={className} ticker={ticker} id={id} />
);

export { SymbolIcon };
