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
  SymbolCta,
} from './styles';

import { Value } from 'components';

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
                <Value value={SHARE * 100} />% share
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
        <SymbolCta id={ID} />
      </BlockWrap>
    </BlockContainer>
  );
};

export { Header };
