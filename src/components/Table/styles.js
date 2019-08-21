import styled, { css } from 'styled-components';

const dWidth = 'min-width: 140px;';
const cWidth = 'min-width: 110px;';
const qWidth = 'min-width: 230px; width: calc(20% - 9px);';
const eWidth = 'min-width: 230px; width: calc(25% - 9px);';
const dPad = 'padding: 0 20px;';

// хуйня

const Cells = {
  RANK: css`
    min-width: 46px;
    font-size: 1.2rem;
    color: var(--secondary-text);
    justify-content: center;
  `,
  PRICE: css`
    min-width: 320px;
    ${dPad}

    .direction {
      margin-left: 16px;
      margin-top: auto;
      margin-bottom: auto;
      position: relative;
      top: -2px;
    }
  `,
  CAP: css`
    ${dWidth};
    ${dPad}
  `,
  VOLUME24HOUR: css`
    ${dWidth};
    ${dPad}
  `,
  CHANGE24HOUR: css`
    ${cWidth};
    ${dPad}
  `,
  CHANGE7DAYS: css`
    ${cWidth};
    ${dPad}
  `,
  CHART: css`
    max-width: 260px;
    min-width: 220px;
    width: 100%;
    overflow: hidden;
    position: relative;

    .chart svg {
      position: absolute;
      width: 102%;
      height: 80%;
      bottom: -2px;
      left: -2px;
    }
  `,
  SHARE: css`
    ${cWidth};
    ${dPad}
  `,
  FSYM: css`
    ${qWidth};
    ${dPad}
  `,
  TSYMID: css`
    ${qWidth};
    ${dPad}
  `,
  PRICEUSD: css`
    ${qWidth};
    ${dPad}
  `,
  PRICECRYPTO: css`
    ${qWidth};
    ${dPad}
  `,
  MARKETVOLUME24HOUR: css`
    ${qWidth};
    ${dPad}
  `,
  EXCHANGENAME: css`
    ${eWidth};
    ${dPad}
  `,
  EXCHANGEMARKETS: css`
    ${eWidth};
    ${dPad}
  `,
  EXCHANGEVOLUME: css`
    ${eWidth};
    ${dPad}
  `,
  EXCHANGESHARE: css`
    ${eWidth};
    ${dPad}
  `,
};

// хуйня

const Head = styled.div`
  display: flex;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 50px;
`;

const Cointainer = styled.div`
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  border: 1px solid var(--border-color);
  box-shadow: 0 1px 15px rgba(0, 0, 0, 0.05), inset 0 4px 0 transparent;
  border-radius: 3px;
  margin: 0 0 24px 0;
`;

const Body = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  min-height: 100px;
  overflow-y: unset;

  & > div {
    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
      transition: 0.3s;
    }
  }
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  position: relative;

  & > div {
    &:last-child {
      border: 0;
    }
  }

  &:nth-child(even) {
    background-color: rgba(0, 0, 0, 0.03);
  }

  &:before {
    content: '';
    position: absolute;
    height: calc(100% - 1px);
    width: 100%;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0);
  }
`;

const TD = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  text-transform: uppercase;
  height: 69px;
  border-right: 1px solid var(--border-color);
  position: relative;
  z-index: 100;

  .ticker,
  .value {
    font-size: 1.6rem;
    line-height: 1em;
    font-weight: 700;
  }

  .value {
    position: relative;
    bottom: -2px;
  }

  .name {
    font-size: 1rem;
    color: var(--secondary-text);
    line-height: 1em;
    width: 100%;
    margin: 2px 0;
  }

  .exchange,
  .symbol {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }

  .title {
    font-size: 1.3rem;
    margin-bottom: 2px;
    line-height: 1em;
    font-weight: 700;
    width: 100%;
  }

  .subtitle {
    font-size: 1rem;
    line-height: 1em;
    color: var(--secondary-text);
    width: 100%;
  }

  .crypto,
  .exchange {
    width: 100%;
    display: flex;
    align-items: center;

    &__img {
      float: left;
      background-repeat: no-repeat;
      background-position: 50%;
      background-size: contain;
      position: relative;
      width: 28px;
      min-width: 28px;
      height: 28px;
      margin-right: 16px;
      /* border: 1px solid var(--border-color-light); */
      border-radius: 50%;
    }

    &__name {
      display: flex;
      flex-wrap: wrap;
      line-height: 1em;
      position: relative;
      bottom: -3px;
      transition: 0.3s;

      .name {
        width: 100%;
      }

      &:hover {
        opacity: 0.75;
      }
    }

    &__price {
      margin-left: auto;
      display: flex;
      position: relative;
      bottom: -1px;
    }
  }
  ${({ cellID }) => Cells[cellID]}
`;

const TH = styled(TD)`
  height: 69px;
  border: 0;
  cursor: pointer;

  .title {
    font-size: 1.3rem;
    margin-bottom: 2px;
    line-height: 1em;
    font-weight: 700;
    width: 100%;
  }

  .subtitle {
    font-size: 1rem;
    line-height: 1em;
    color: var(--secondary-text);
  }

  box-shadow: ${({ isDesc, isSorted }) =>
    !isSorted
      ? 'none'
      : isDesc
      ? 'inset 0 -3px 0 0 var(--blue)'
      : 'inset 0 3px 0 0 var(--blue)'};
`;

export { TD, Row, Body, Cointainer, Head, TH };
