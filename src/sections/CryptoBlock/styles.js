import styled from 'styled-components';
import { BlockStyles, MEDIA } from 'styles/common';
import { SymbolRangeSelector } from 'components';

const BlockContainer = styled.div`
  ${BlockStyles}
`;

const BlockHeader = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e5e5e5;

  ${MEDIA.PHONE`
    padding: 0;
    flex-wrap: wrap;
  `}

  ${MEDIA.DESKTOP`
    flex-wrap: nowrap;
    padding: 2px 16px 0 16px;
  `};
`;

const BlockFooter = styled.div`
  padding: 20px 18px 20px 11px;
  border-top: 1px solid #e5e5e5;
  border-radius: 0 0 3px 3px;
  display: flex;

  align-items: center;
  text-transform: uppercase;
  line-height: 1em;

  ${MEDIA.PHONE`
    flex-wrap: wrap;
    justify-content: flex-start;
    text-align: left;
  `}

  ${MEDIA.TABLET`
    flex-wrap: nowrap;
    justify-content: center;
    text-align: center;
  `}
`;

const CryptoStats = styled.a`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;

  &:hover {
    opacity: 0.75;
  }

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

const CryptoIcon = styled.div`
  width: 32px;
  height: 32px;
  background-image: ${({ ticker, id }) =>
    `url(https://coinrate.com/static/crypto/${ticker.toLowerCase()}-${id.toLowerCase()}.svg?v=1)`};
  background-size: cover;
  background-position: 50%;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  transition: 0.3s;
  margin-top: -3px;
`;

const CryptoLink = styled.div`
  margin-left: 18px;
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

const CryptoItem = styled.div`

  ${MEDIA.PHONE`
    width: 50%;
    padding: 0 12px;
    margin-bottom: 16px;
  `}

  ${MEDIA.SMARTPHONE`
    width: 33%;
  `}

  ${MEDIA.TABLET`
    width: 15%;
    padding: 0;
    margin-bottom: 0;
  `}

  ${MEDIA.DESKTOP`
    width: auto;
    padding: 0 36px;
  `};
`;

const CryptoTitle = styled.div`
  color: #8e8e90;
  letter-spacing: 0.5px;
  font-size: 1rem;
  line-height: 1em;
  margin-bottom: 6px;
`;

const CryptoValue = styled.div`
  color: ${p => p.color};
  font-size: 1.6rem;
  line-height: 1em;
  font-weight: 700;
  letter-spacing: 0.5px;
`;

const CryptoRangeSelector = styled(SymbolRangeSelector)`
  ${MEDIA.PHONE`
    margin-right: auto;
    margin-left: auto;
  `}

  ${MEDIA.DESKTOP`
    margin-right: 0;
  `};
`;

export {
  BlockContainer,
  BlockHeader,
  BlockFooter,
  CryptoStats,
  CryptoIcon,
  CryptoName,
  CryptoLink,
  CriptoTicker,
  CryptoPrice,
  CryptoChange,
  CryptoItem,
  CryptoTitle,
  CryptoValue,
  CryptoRangeSelector,
};
