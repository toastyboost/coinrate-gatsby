import styled, { css } from 'styled-components';

const arrow = `
  position: relative;
  width: 36px;
  height: 36px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    opacity: 0.7;
  }
`;

const arrowBefore = `
  content: '';
  position: absolute;
  z-index: 10;
  bottom: 0;
  top: 0;
  margin: auto;
  width: 7.5px;
  height: 7.5px;
  border-right: 2.5px solid var(--blue);
  border-top: 2.5px solid var(--blue);
`;

const TableContainer = styled.div`
  margin-top: 24px;

  .prev {
    ${arrow}
    &:before {
      ${arrowBefore}
      transform: rotate(225deg);
      left: 19px;
    }
  }

  .next {
    ${arrow}

    &:before {
      ${arrowBefore}
      transform: rotate(405deg);
      right: 19px;
    }
  }
`;

const PagesContainer = styled.div`
  border-top: 1px solid var(--border-color);
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.15);
  display: flex;
  align-content: center;
  align-items: center;
  width: 100%;
  font-size: 1rem;
  line-height: 1em;
`;

const VisiblePages = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 0;

  .item {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 0 8px;
    color: rgba(0, 0, 0, 0.7);
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 24px;
    padding: 5px 8px 4px 8px;
    min-width: 20px;
    font-weight: 700;
    cursor: pointer;
    transition: 0.3s;

    &.current {
      color: #fff;
      background-color: var(--blue);
    }

    &:hover {
      color: #fff;
      background-color: var(--blue);
    }
  }
`;
const dWidth = 'min-width: 140px;';
const cWidth = 'min-width: 110px;';

const dPad = 'padding: 0 20px;';

const Cells = {
  RANK: css`
    min-width: 40px;
    font-size: 1.2rem;
    width: 100%;
    color: var(--secondary-text);
    justify-content: center;
  `,
  PRICE: css`
    min-width: 300px;
    ${dPad}

    .crypto {
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
        border: 1px solid var(--border-color-light);
        border-radius: 50%;
      }

      &__name {
        display: flex;
        flex-wrap: wrap;
        line-height: 1em;
        position: relative;
        bottom: -1px;

        .name {
          width: 100%;
        }
      }

      &__price {
        margin-left: auto;
        display: flex;
        position: relative;
        bottom: -1px;
      }
    }

    .direction {
      margin-left: 16px;
      margin-top: auto;
      margin-bottom: auto;
      position: relative;
      top: -2px;
    }

    .chart {
      position: relative;
      display: flex;
      bottom: -2px;
      left: -2px;
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
    min-width: 210px;
  `,
  SHARE: css`
    ${cWidth};
    ${dPad}
  `,
};

const Cell = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  text-transform: uppercase;
  height: 63px;
  border-right: 1px solid var(--border-color);
  position: relative;
  z-index: 100;

  .name {
    font-size: 1.1rem;
    color: var(--secondary-text);
    line-height: 1em;
    width: 100%;
    margin: 2px 0;
  }

  .ticker,
  .value {
    font-size: 1.7rem;
    line-height: 1em;
    font-weight: 700;
  }

  ${({ id }) => Cells[id]}

  ${({ isHead, isSorted, isDesc }) =>
    isHead && isSorted
      ? isDesc === 'asc'
        ? 'box-shadow: inset 0 -3px 0 0 var(--blue);'
        : 'box-shadow: inset 0 3px 0 0 var(--blue);'
      : ''}
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  position: relative;

  div {
    &:last-child {
      border: 0;
    }
  }

  &:nth-child(even) {
    background-color: rgba(0, 0, 0, 0.02);
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

const Body = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  & > div {
    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
      transition: 0.3s;
    }
  }
`;

const Head = styled.div`
  display: flex;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 50px;

  div {
    height: 73px;
    border: 0;
    cursor: pointer;
  }

  .title {
    font-size: 1.4rem;
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
`;

const Cointainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  border: 1px solid var(--border-color);
  box-shadow: 0 1px 15px rgba(0, 0, 0, 0.05), inset 0 4px 0 transparent;
  border-radius: 3px;
  margin: 0 0 24px 0;
`;

export {
  TableContainer,
  PagesContainer,
  VisiblePages,
  Cell,
  Row,
  Body,
  Cointainer,
  Head,
};
