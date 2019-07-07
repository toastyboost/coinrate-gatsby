import styled from 'styled-components';
import { BlockStyles } from 'styles/common';

const BlockContainer = styled.div`
  ${BlockStyles}
`;

const BlockHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 16px 18px 12px 18px;
  border-bottom: 1px solid #e5e5e5;
`;

const BlockFooter = styled.div`
  padding: 20px 18px 20px 11px;
  border-top: 1px solid #e5e5e5;
  border-radius: 0 0 3px 3px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-transform: uppercase;
  line-height: 1em;
`;

const CryptoIcon = styled.div`
  width: 32px;
  height: 32px;
  background-image: url(${({ ticker, id }) =>
    `https://coinrate.com/static/crypto/${ticker.toLowerCase()}-${id.toLowerCase()}.svg?v=1`});
  background-size: cover;
  background-position: 50%;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  transition: 0.3s;
  margin-top: -3px;
`;

const CryptoLink = styled.a`
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
  padding: 0 36px;
`;

const CryptoTitle = styled.div`
  color: #8e8e90;
  letter-spacing: 0.5px;
  font-size: 1rem;
  margin-bottom: 12px;
`;

const CryptoValue = styled.div`
  color: ${p => p.color};
  font-size: 1.6rem;
  font-weight: 800;
  letter-spacing: 0.5px;
`;

export {
  BlockContainer,
  BlockHeader,
  BlockFooter,
  CryptoIcon,
  CryptoName,
  CryptoLink,
  CriptoTicker,
  CryptoPrice,
  CryptoChange,
  CryptoItem,
  CryptoTitle,
  CryptoValue,
};
