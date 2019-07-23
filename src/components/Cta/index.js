import React from 'react';
import { CtaButton } from './styles';
import { availiableAssets } from 'helpers/constants';

const Cta = ({ className, id }) => {
  const getParnerLink = () =>
    // eslint-disable-next-line max-len
    `https://iqoption.com/lp/buying-crypto/en/?active=${id}&aff=38838&afftrack=cryptoPage_${id}&retrack=coinrate&type=crypto`;

  return (
    <CtaButton href={getParnerLink()} target="_blank" className={className}>
      buy{' '}
      {availiableAssets.includes(id.toLowerCase())
        ? id.replace('-', ' ')
        : 'crypto'}
      <span>With Visa/Mastercard</span>
    </CtaButton>
  );
};

export { Cta };
