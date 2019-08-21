import React from 'react';

import { Icon } from './styles';

const SymbolIcon = ({ className, ticker, id, name }) => (
  <Icon
    key={id}
    onError={p => (p.target.style.opacity = '0')}
    className={className}
    src={`/static/crypto/${ticker.toLowerCase()}-${id.toLowerCase()}.svg?v=1)`}
    alt={`${name} (${ticker})`}
    title={`${name} logo`}
  />
);

export { SymbolIcon };
