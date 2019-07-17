import React from 'react';

import {
  BlockContainer,
  BlockWrap,
  CryptoIcon,
  CryptoName,
  CryptoNameWrap,
  CriptoTicker,
  CryptoDetails,
  CryptoInfo,
  CryptoShare,
  CryptoPrice,
  CryptoValue,
  CryptoChange,
  CryptoBTC,
  CryptoStats,
  StatsItem,
  StatsTitle,
  StatsValue,
  StatsChange,
  BlockCTA,
} from './styles';

import { Value } from 'components';
import { availiableAssets } from './constants';

const Header = ({ data }) => {
  const {
    ID,
    TICKER,
    NAME,
    SHARE,
    PRICE,
    CHANGE24HOUR,
    PRICEBTC,
    VOLUME24HOUR,
    CHANGEVOLUME24HOUR24H,
    CAP,
    CHANGECAP24H,
    SUPPLY,
  } = data;

  const getParnerLink = id =>
    // eslint-disable-next-line max-len
    `https://iqoption.com/lp/buying-crypto/?aff=38838&afftrack=cryptoPage_${id}&active=${id}&retrack=coinrate&type=crypto`;

  return (
    <BlockContainer>
      <BlockWrap>
        <CryptoInfo>
          <CryptoIcon id={ID} ticker={TICKER} />
          <CryptoNameWrap>
            <CryptoName>{NAME}</CryptoName>
            <CryptoDetails>
              <CriptoTicker>{TICKER}</CriptoTicker>
              <CryptoShare>
                <Value value={SHARE * 100} /> %
              </CryptoShare>
            </CryptoDetails>
          </CryptoNameWrap>
        </CryptoInfo>
        <CryptoPrice>
          <CryptoValue>
            <Value value={PRICE} prefix="$" />
          </CryptoValue>
          <CryptoChange>
            <Value value={CHANGE24HOUR} suffix="%" />
          </CryptoChange>
          <CryptoBTC>
            <u>{TICKER}</u> ~ <Value value={PRICEBTC} /> BTC
          </CryptoBTC>
        </CryptoPrice>
        <CryptoStats>
          <StatsItem>
            <StatsTitle>24H volume</StatsTitle>
            <StatsValue>
              <Value value={VOLUME24HOUR} prefix="$" />
              <StatsChange>
                <Value value={CHANGEVOLUME24HOUR24H} suffix="%" />
              </StatsChange>
            </StatsValue>
          </StatsItem>
          <StatsItem>
            <StatsTitle>Market cap</StatsTitle>
            <StatsValue>
              <Value value={CAP} prefix="$" />
              <StatsChange>
                <Value value={CHANGECAP24H} suffix="%" />
              </StatsChange>
            </StatsValue>
          </StatsItem>
          <StatsItem>
            <StatsTitle>Circ. Supply</StatsTitle>
            <StatsValue>
              <Value value={SUPPLY} />
            </StatsValue>
          </StatsItem>
        </CryptoStats>
        <BlockCTA href={getParnerLink(TICKER)} target="_blank">
          buy {availiableAssets.includes(ID) ? ID : 'crypto'}
        </BlockCTA>
      </BlockWrap>
    </BlockContainer>
  );
};

export { Header };
