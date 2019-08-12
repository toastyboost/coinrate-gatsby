import styled from 'styled-components';
import { MEDIA } from 'styles/common';

const ChartContainer = styled.div`
  box-shadow: 0 1px 25px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  margin-bottom: 12px;
  border-radius: 2px;

  ${MEDIA.PHONE`
    padding: 24px 12px 12px 12px;
  `};

  ${MEDIA.DESKTOP`
    padding: 0 24px 24px 24px;
  `};

  .Chart {
    border: 1px solid var(--border-color);
    border-radius: 2px;
  }
`;

const ChartControls = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  position: relative;

  ${MEDIA.PHONE`
    justify-content: center;
  `};

  ${MEDIA.DESKTOP`
    justify-content: space-between;
  `};

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    height: 1px;
    background-color: var(--border-color-light);

    ${MEDIA.PHONE`
      width: calc(100% + 24px);
      left: -12px;
    `};

    ${MEDIA.DESKTOP`
      width: calc(100% + 48px);
      left: -24px;
    `};
  }

  &:after {
    content: '';
    position: absolute;
    bottom: 60px;
    height: 1px;
    background-color: var(--border-color-light);

    ${MEDIA.PHONE`
      width: calc(100% + 24px);
      left: -12px;
    `};

    ${MEDIA.DESKTOP`
      width: calc(100% + 48px);
      left: -24px;
    `};
  }
`;

const ChartTitle = styled.h1`
  font-size: 1.4rem;
  line-height: 1em;
  font-weight: 400;
  color: var(--secondary-text);

  ${MEDIA.PHONE`
    width: 100%;
    text-align: center;
    padding-bottom: 20px;
  `};

  ${MEDIA.DESKTOP`
    width: auto;
    text-align: left;
    padding-bottom: 0;
  `};

  &:before {
    content: '';
    width: 10px;
    height: 10px;
    margin-right: 12px;
    border-radius: 50%;
    background-color: var(--border-color);

    ${MEDIA.PHONE`
      display: none;
    `};

    ${MEDIA.DESKTOP`
      display: inline-block;
    `};
  }
`;

const ChartData = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 1.1rem;
  text-transform: uppercase;

  ${MEDIA.PHONE`
    padding: 16px 0 12px 0;
    justify-content: center;
  `};

  ${MEDIA.DESKTOP`
    padding: 16px 0 16px 0;
  `};
`;

const CryptoItem = styled.div`
  flex-wrap: wrap;

  ${MEDIA.PHONE`
    display: flex;
    justify-content: center;
    width: 33.3%;
    margin-bottom: 6px;
  `};

  ${MEDIA.TABLET`
    width: 25%;
  `};

  ${MEDIA.DESKTOP`
    margin-bottom: 0;
    width: auto;
    margin-right: 18px;
    ${({ isMobile }) => (isMobile ? 'display: none;' : ' display: flex;')}
  `};
`;

const CryptoTitle = styled.div`
  color: var(--secondary-text);

  ${MEDIA.PHONE`
    margin-right: 4px;
  `};

  ${MEDIA.DESKTOP`
    margin-right: 8px;
  `};
`;

const CryptoValue = styled.div`
  color: ${p => (p.color ? p.color : 'var(--text-color)')};
  font-weight: 700;
`;

const ChartRange = styled.div`
  color: var(--secondary-text);

  ${MEDIA.PHONE`
    display: none;
    padding-top: 16px;
    margin-top: 8px;
    border-top: 1px solid var(--border-color-light);
    width: 100%;
  `};

  ${MEDIA.TABLET`
    margin-top: 16px;

  `};

  ${MEDIA.DESKTOP`
    display: inline-block;
    margin-left: auto;
    width: auto;
    border: 0;
    padding-top: 0;
    margin-top: 0;
  `};

  time {
    color: var(--text-color);

    ${MEDIA.PHONE`
      margin: 0 4px;
    `};

    ${MEDIA.DESKTOP`
      width: auto;
      margin: 0 6px;
    `};
  }

  time:last-child {
    margin-right: 0;
  }
`;

const ChartAbout = styled.div`
  margin-top: 24px;
  font-size: 1.4rem;
  line-height: 1.6;
`;

export {
  ChartContainer,
  ChartData,
  ChartTitle,
  CryptoItem,
  CryptoTitle,
  CryptoValue,
  ChartRange,
  ChartControls,
  ChartAbout,
};
