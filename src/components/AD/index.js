import React from 'react';
import { compose } from 'redux';
import { AdContainer, AdChange, AdChart, AdCta } from './styles';
import { withSymbol } from 'store/hocs';
import { SparkChart, Value } from 'components';
import IsScrolling from 'react-is-scrolling';

const AdBlock = ({ symbol, selectSymbol }) => {
  const getParnerLink = () =>
    // eslint-disable-next-line max-len
    `https://iqoption.com/lp/buying-crypto/?aff=38838&afftrack=cryptoPage_${symbol}&active=${symbol}&retrack=coinrate&type=crypto`;

  const symbolData = selectSymbol[symbol];

  if (!symbolData) return false;

  const { NAME, CHANGE7DAYS } = symbolData;
  const isWindowTop = window.pageYOffset > 10 ? true : false;

  return (
    <AdContainer isVisible={isWindowTop} href={getParnerLink()} target="_blank">
      <AdChart>
        <SparkChart symbol={symbol} />
      </AdChart>
      <AdChange>
        <Value value={CHANGE7DAYS} suffix="%" showSign />
        <span className="title">
          <b>{NAME}</b>
          <em>7 days</em>
        </span>
      </AdChange>
      <AdCta>Trade it now</AdCta>
    </AdContainer>
  );
};

const AD = compose(
  withSymbol,
  IsScrolling
)(AdBlock);

export { AD };
