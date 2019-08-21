import styled from 'styled-components';
import { MEDIA, Wrap, BlockStyles } from 'styles/common';
import { SymbolIcon } from 'components';

const Container = styled.div`
  position: relative;
  margin-bottom: -30px;

  ${MEDIA.PHONE`
    padding: 24px 0 36px 0;
  `};

  ${MEDIA.DESKTOP`
    padding: 28px 0 72px 0;
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
    background-color: var(--purple);
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
    height: 200px;
    top: 0;
    left: 0;
    content: '';
  }
`;

const BlockWrap = styled(Wrap)`
  position: relative;
  z-index: 100;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ChartContainer = styled.div`
  ${BlockStyles}
  padding: 0 24px;

  ${MEDIA.PHONE`
    width: calc(100% - 12px);
  `};

  ${MEDIA.DESKTOP`
      width: calc(70% - 12px);
  `};
`;

const CryptoIcon = styled(SymbolIcon)`
  width: 32px;
  height: 32px;
  margin-top: -3px;
`;

const CryptoLink = styled.h1`
  margin-left: 18px;
  font-size: 2.4rem;
  line-height: 1em;

  em {
    font-style: normal;
    font-weight: 300;
    opacity: 0.5;
  }
`;

const CriptoTicker = styled.div`
  font-size: 2rem;
  line-height: 1em;
  font-weight: 700;
`;

const CryptoName = styled.div`
  font-size: 1.2rem;
  line-height: 1em;
  color: #8e8e90;
`;

const CryptoPrice = styled.div`
  margin-left: 18px;
  font-size: 2.4rem;
  line-height: 1em;
  font-weight: 700;
`;

const CryptoChange = styled.div`
  margin-left: 12px;
  font-size: 1.4rem;
  line-height: 1em;
  font-weight: 700;
  margin-top: -16px;
`;

const BlockHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${MEDIA.PHONE`
    padding: 0;
    flex-wrap: wrap;
  `}

  ${MEDIA.DESKTOP`
    padding-top: 4px;
    flex-wrap: nowrap;

  `};
`;

const CryptoStats = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;

  ${MEDIA.PHONE`
    border-bottom: 1px solid #e5e5e5;
    justify-content: center;
    padding: 16px 0 12px 0;
    width: 100%;
  `}

  ${MEDIA.DESKTOP`
    width: auto;
    padding: 0;
    border-bottom: 0;
    justify-content: flex-start;
  `};
`;

export {
  BlockWrap,
  ChartContainer,
  Container,
  CryptoIcon,
  CryptoLink,
  CriptoTicker,
  CryptoName,
  CryptoPrice,
  CryptoChange,
  BlockHeader,
  CryptoStats,
};
