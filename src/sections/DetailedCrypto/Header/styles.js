import styled from 'styled-components';
import { Wrap, MEDIA } from 'styles/common';
import { Cta, SymbolIcon } from 'components';

const BlockContainer = styled.div`
  position: relative;
  background-color: var(--purple);
  margin-bottom: -30px;

  ${MEDIA.PHONE`
    padding: 24px 0 36px 0;
  `};

  ${MEDIA.DESKTOP`
    padding: 48px 0 72px 0;
  `};

  &:before {
    background-image: repeating-linear-gradient(
        150deg,
        hsla(0, 0%, 100%, 0.08),
        hsla(0, 0%, 100%, 0.08) 1px,
        transparent 0,
        transparent 41px
      ),
      repeating-linear-gradient(
        -150deg,
        hsla(0, 0%, 100%, 0.08),
        hsla(0, 0%, 100%, 0.08) 1px,
        transparent 0,
        transparent 41px
      );
    background-size: 82px 47px;
    background-attachment: fixed;
    z-index: 2;
  }

  &:after {
    background-image: linear-gradient(
      0deg,
      rgba(108, 7, 196, 0.7),
      rgba(37, 37, 142, 0.5)
    );
    z-index: 1;
  }

  &:after,
  &:before {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
  }
`;

const BlockWrap = styled(Wrap)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  position: relative;
  z-index: 100;
  color: #fff;
  text-shadow: 0 0 1px rgba(0, 0, 0, 0.7);
`;

const CryptoIcon = styled(SymbolIcon)`
  float: left;
  border-radius: 50%;
  width: 48px;
  height: 48px;

  ${MEDIA.PHONE`
    display: none;
  `};

  ${MEDIA.SMARTPHONE`
    display: inline-block;
    margin-right: 12px;
  `};

  ${MEDIA.DESKTOP`
    margin-right: 24px;
  `};
`;

const CryptoInfo = styled.div`
  margin-right: 24px;

  ${MEDIA.DESKTOP`
    width: 100%;
    max-width: 215px;
  `};
`;

const CryptoName = styled.div`
  font-size: 3.2rem;
  line-height: 1em;
  font-weight: 700;
  max-height: 63px;
  overflow: hidden;
`;

const CryptoNameWrap = styled.div`
  overflow: hidden;
`;

const CryptoDetails = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  font-size: 1rem;
`;

const CryptoShare = styled.div`
  margin-bottom: -1px;
`;

const CriptoTicker = styled.div`
  background-color: hsla(0, 0%, 100%, 0.15);
  padding: 3px 4px 1px 4px;
  border-radius: 2px;
  margin-right: 9px;
`;

const CryptoPrice = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;

  ${MEDIA.PHONE`
    margin-top: 20px;
  `};

  ${MEDIA.SMARTPHONE`
    margin-top: 0;
  `};

  ${MEDIA.DESKTOP`
    width: 100%;
    max-width: 220px;
  `};
`;

const CryptoValue = styled.div`
  font-size: 3.2rem;
  line-height: 1em;
  font-weight: 700;
`;

const CryptoChange = styled.div`
  position: relative;
  top: -6px;
  left: 6px;
  font-size: 1.6rem;
  line-height: 1em;
  font-weight: 700;
`;

const CryptoBTC = styled.div`
  width: 100%;
  font-size: 1rem;

  u {
    background-color: hsla(0, 0%, 100%, 0.15);
    padding: 3px 4px 1px 4px;
    border-radius: 2px;
    text-decoration: none;
    display: inline-block;
    margin-right: 3px;
  }
`;

const CryptoStats = styled.div`
  flex-wrap: wrap;
  align-content: center;
  align-items: center;

  ${MEDIA.PHONE`
    display: none;
    margin-top: 28px;
  `};

  ${MEDIA.SMARTPHONE`
    width: auto;
  `};

  ${MEDIA.DESKTOP`
    display: flex;
    margin-top: 0;
  `};
`;

const StatsItem = styled.div`
  text-transform: uppercase;
  display: flex;
  flex-wrap: wrap;

  ${MEDIA.PHONE`
    width: 50%;
    margin-bottom: 6px;
  `};

  ${MEDIA.TABLET`
    width: 33%;
    max-width: 140px;
  `};

  ${MEDIA.DESKTOP`
    max-width: 100%;
    margin-bottom: 0;
  `};
`;

const StatsTitle = styled.div`
  opacity: 0.75;
  font-size: 1rem;
  margin-bottom: 3px;
  width: 100%;
`;

const StatsValue = styled.div`
  font-weight: 700;
  font-size: 2.4rem;
  display: flex;
`;

const StatsChange = styled.div`
  position: relative;
  top: 0;
  left: 6px;
  font-size: 1rem;
  line-height: 1em;
`;

const SymbolCta = styled(Cta)`
  ${MEDIA.PHONE`
    width: 100%;
  `};

  ${MEDIA.DESKTOP`
    margin-left: auto;
    width: auto;
  `};
`;

export {
  BlockContainer,
  BlockWrap,
  CryptoIcon,
  CriptoTicker,
  CryptoDetails,
  CryptoInfo,
  CryptoName,
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
  CryptoNameWrap,
  SymbolCta,
};
