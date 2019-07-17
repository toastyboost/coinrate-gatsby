import { css } from 'styled-components';

const ChartStyles = css`
  .highcharts-container {
    &:before,
    &:after {
      content: '';
      position: absolute;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
    }

    &:before {
      bottom: -1px;
      background-image: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.08) 0,
        rgba(0, 0, 0, 0) 40px
      );
    }

    &:after {
      top: -1px;
      background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.08) 0%,
        rgba(0, 0, 0, 0) 40px
      );
    }
  }

  .Chart {
    overflow: hidden;
    position: relative;

    &__tooltip {
      padding-left: 10px;
      padding-top: 8px;
      padding-right: 8px;
      padding-bottom: 0;
      position: relative;
      z-index: 100;

      .title {
        font-family: var(--main-font);
        font-size: 1rem;
        font-weight: 700;
        display: block;
        margin-bottom: 1px;
        text-transform: uppercase;
      }

      .value {
        display: block;
        font-weight: 400;
        margin-bottom: 7px;
        font-size: 1.1rem;
      }

      .cap .value,
      .price .value {
        &:before {
          content: '';
          display: inline-block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          margin-right: 5px;
          position: relative;
          top: -1px;
        }
      }

      .price .value {
        &:before {
          background-color: var(--blue);
        }
      }

      .cap .value {
        &:before {
          background-color: var(--gray-dark);
        }
      }
    }

    &__label {
      background-color: var(--blue);
      color: #fff;
      padding: 4px 5px;
      border-radius: 1px;
      position: relative;
      box-shadow: var(--box-shadow);
      z-index: 100;

      &:before {
        content: '';
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 4px 6.4px;
        border-color: transparent transparent #157efb;
        position: absolute;
      }

      &:after {
        content: '';
        position: absolute;
        width: 6px;
        height: 6px;
        background-color: #157efb;
        border-radius: 50%;
      }

      &--first {
        left: -3px;
        bottom: 12px;

        &:before {
          bottom: -3px;
          left: -2px;
          transform: rotate(685deg);
        }

        &:after {
          display: none;
        }
      }

      &--last {
        bottom: 10px;
        right: 3px;

        &:before {
          transform: rotate(270deg);
          right: -1px;
          bottom: -3px;
        }

        &:after {
          position: absolute;
          width: 6px;
          height: 6px;
          background-color: #157efb;
          border-radius: 50%;
          right: -2px;
          bottom: -13px;
        }
      }
    }

    .highcharts-tooltip > span {
      background-color: #fff;
      opacity: 1;
      z-index: 9998 !important;
      padding: 8px;
      top: 0;
    }

    .highcharts-series-group {
      transform: translateX(-3px) !important;
    }

    .highcharts-data-labels.highcharts-column-series
      .highcharts-data-label
      > span {
      background-color: var(--block-bg);
      box-shadow: 0 1px 15px rgba(0, 0, 0, 0.15);
      transition: 0.2s;
      padding: 2px 3px 1px 3px;
      transform: translateY(-20px);
      transition: 0.3s;
    }
  }
`;

export { ChartStyles };
