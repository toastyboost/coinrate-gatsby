import styled from 'styled-components';
import { MEDIA } from 'styles/common';
import { SymbolIcon } from 'components';

const CardWrap = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${MEDIA.PHONE`
    width: 100%;
    padding: 0 6px 12px 6px;
  `};

  ${MEDIA.SMARTPHONE`
    width: 50%;
  `};

  ${MEDIA.DESKTOP`
    width: 25%;
    padding: 0 12px 24px 12px;
 `};
`;

const CardBlock = styled.a`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  box-shadow: var(--box-shadow);
  background-color: rgba(0, 0, 0, 0.01);
  border: 1px solid var(--border-color);
  border-radius: 3px;
  position: relative;
  overflow: hidden;
  transition: 0.3s;

  &:hover {
    border: 1px solid rgba(0, 0, 0, 0.15);
  }

  &:before,
  &:after {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
  }

  &:after {
    top: 0;
    background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 1) 50%,
      rgba(255, 255, 255, 0.5) 100%
    );
  }
`;

const CardSymbolIcon = styled(SymbolIcon)`
  width: 36px;
  height: 36px;
  min-width: 36px;
  float: left;
  margin-right: 16px;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  text-transform: uppercase;
  z-index: 110;

  ${MEDIA.PHONE`
    padding: 8px 10px 0 10px;
  `};

  ${MEDIA.DESKTOP`
    padding: 16px 20px 0 20px;
 `};
`;

const CardFooter = styled.div`
  width: 100%;
  z-index: 90;
  margin-bottom: -2px;
`;

const CardInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const CardTitle = styled.div`
  font-size: 1rem;
  line-height: 1em;
  color: var(--secondary-text);
  width: 100%;
`;

const CardTicker = styled.div`
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1em;
  margin: 2px 0;
`;

const CardChange7D = styled.div`
  margin-left: auto;
  text-align: right;

  .value {
    font-size: 1.6rem;
    line-height: 1em;
    font-weight: 700;
    margin: 2px 0;
    display: block;
  }

  .text {
    font-size: 1rem;
    line-height: 1em;
    color: var(--secondary-text);
    width: 100%;
    display: block;
  }
`;

export {
  CardWrap,
  CardBlock,
  CardSymbolIcon,
  CardHeader,
  CardFooter,
  CardInfo,
  CardTitle,
  CardTicker,
  CardChange7D,
};
