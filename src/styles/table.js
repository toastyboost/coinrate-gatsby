import { css } from 'styled-components';

const TableStyles = css`
  .ReactTable {
    position: relative;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    width: 100%;
    border: 1px solid var(--border-color);
    box-shadow: 0 1px 15px rgba(0, 0, 0, 0.05), inset 0 4px 0 transparent;
    border-radius: 3px;
    margin: 24px 0;

    .rt-table {
      overflow: scroll;
      display: flex;
      flex-direction: column;
      align-items: stretch;
      width: 100%;
      border-collapse: collapse;
    }

    .rt-td {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      height: 63px;
      padding-left: 18px;
      padding-right: 18px;
      text-transform: uppercase;
      border-right: 1px solid var(--border-color);
      position: relative;
      z-index: 100;

      &-body {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        align-content: center;
        width: 100%;
      }

      .rank {
        font-size: 1.2rem;
        text-align: center;
        width: 100%;
        color: var(--secondary-text);
      }

      .exchange,
      .crypto {
        display: flex;

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

      .name {
        font-size: 1rem;
        color: var(--secondary-text);
        line-height: 1em;
        width: 100%;
      }

      .ticker {
        font-size: 1.6rem;
        line-height: 1em;
        font-weight: 700;
      }

      .value {
        font-size: 1.6rem;
        line-height: 1em;
        font-weight: 700;
      }

      .direction {
        margin-left: 16px;
        margin-top: auto;
        margin-bottom: auto;
        position: relative;
        top: -2px;
      }
    }

    .rt-tbody {
      .rt-tr {
        position: relative;

        .rt-td:first-child {
          padding: 0;
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

        &:hover {
          background-color: rgba(0, 0, 0, 0.05);
          transition: 0.3s;
        }
      }
    }

    .-even {
      background-color: rgba(0, 0, 0, 0.03);
    }

    .-center {
      margin-bottom: -4px;
      font-size: 1.2rem;
      color: var(--secondary-text);
    }

    .-btn {
      width: 40px;
      height: 36px;
      font-size: 0;
      position: relative;
      z-index: 100;
      background-color: transparent;
      cursor: pointer;
    }

    .-pagination {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top: 1px solid var(--border-color);
      box-shadow: 0 0 50px rgba(0, 0, 0, 0.15);
    }

    .-previous,
    .-next {
      position: relative;
      height: 36px;
      transition: 0.3s;

      &:hover {
        opacity: 0.7;
      }

      &:before {
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
      }
    }

    .-previous {
      &:before {
        transform: rotate(225deg);
        left: 19px;
      }
    }

    .-next {
      &:before {
        transform: rotate(405deg);
        right: 19px;
      }
    }

    .rt-th {
      flex: 1 0 0;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      position: relative;
      display: flex;
      transition: 0.3s;

      &:hover {
        opacity: 0.6;
      }
    }

    .rt-resizable-header-content {
      margin: auto 0;
    }
    .rt-expandable {
      cursor: pointer;
    }
    .rt-tbody {
      margin-right: -16px;
      display: flex;
      flex: 99999 1 auto;
      flex-direction: column;
      overflow-y: auto;

      > div {
        &:only-child {
          .rt-td {
            min-height: 140px;
            max-height: auto;
          }
        }
      }
      .rt-tr-group {
        border-bottom: solid 1px var(--border-color);

        &:last-child {
          border-bottom: 0;
        }
      }
    }

    .rt-thead {
      margin-right: -16px;
      display: flex;
      border-bottom: solid 1px var(--border-color);
      box-shadow: 0 0 50px rgba(0, 0, 0, 0.15);

      &-item {
        padding: 0 16px;
        height: 70px;
        display: flex;
        flex-wrap: wrap;
        align-content: center;
        align-items: center;
        text-transform: uppercase;
        line-height: 1em;

        span {
          width: 100%;
        }

        .title {
          font-size: 1.4rem;
          font-weight: 700;
          margin-bottom: 8px;
        }

        .subtitle {
          font-size: 1rem;
          color: var(--secondary-text);
        }
      }

      .rt-th {
        border-right: 1px solid transparent;
        &:nth-child(1) {
          > div {
            width: 100%;
          }
        }
        &:last-child {
          border-right: 0;
        }
      }
      .rt-th.-cursor-pointer {
        cursor: pointer;
      }
      .rt-td.-cursor-pointer {
        cursor: pointer;
      }
      .rt-td {
        &:last-child {
          border-right: 0;
        }
      }
      .rt-header-pivot {
        &:after {
          left: 100%;
          top: 50%;
          border: solid transparent;
          content: ' ';
          height: 0;
          width: 0;
          position: absolute;
          pointer-events: none;
        }
        &:before {
          left: 100%;
          top: 50%;
          border: solid transparent;
          content: ' ';
          height: 0;
          width: 0;
          position: absolute;
          pointer-events: none;
        }
      }
    }

    .rt-thead.-filters {
      .rt-th {
        border-right: 1px solid #ededed;
      }
      input[type='text'] {
        border: 0;
        background-color: var(--block-bg);
        padding: 6px 17px;
        font-size: inherit;
        border-radius: 3px;
        outline: none;
        text-transform: uppercase;
      }
    }

    .-sort-asc {
      box-shadow: inset 0 -3px 0 0 var(--blue);
    }
    .-sort-desc {
      box-shadow: inset 0 3px 0 0 var(--blue);
    }
    .-loading {
      display: block;
      position: absolute;
      left: 0;
      right: 0;
      top: 71px;
      bottom: 0;
      background: rgba(255, 255, 255, 0.8);
      transition: all 0.3s ease;
      z-index: -1;
      opacity: 0;
      pointer-events: none;
      .Loading {
        position: relative;
        top: 28px;
      }
      > div {
        position: absolute;
        display: block;
        text-align: center;
        width: 100%;
        top: 50%;
        left: 0;
        font-size: 15px;
        color: $color_2;
        transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        display: flex;
        justify-content: center;
      }
    }
    .-loading.-active {
      opacity: 1;
      z-index: 2;
      pointer-events: all;
    }
    .rt-noData {
      position: absolute;
      left: 50%;
      top: 50%;

      transform: translate(-50%, -50%);

      transition: all 0.3s ease;
      z-index: 10;
      pointer-events: none;
      margin-top: 15px;
      padding: 16px 60px;
      color: $color_3;
      border-radius: 2px;
      text-align: center;
      box-shadow: $box-shadow;
      i {
        margin-top: 10px;
      }
    }
    .rt-tr-group {
      flex: 1 0 auto;
      display: flex;
      flex-direction: column;
      align-items: stretch;
    }
    .rt-tr {
      -webkit-box-flex: 1;
      -ms-flex: 1 0 auto;
      flex: 1 0 auto;
      display: -webkit-inline-box;
      display: -ms-inline-flexbox;
      display: inline-flex;
    }
    .rt-expander {
      display: inline-block;
      position: relative;
      margin: 0;
      color: $color_4;
      margin: 0 10px;
      &:after {
        content: '';
        position: absolute;
        width: 0;
        height: 0;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%) rotate(-90deg);
        transform: translate(-50%, -50%) rotate(-90deg);
        border-left: 5.04px solid transparent;
        border-right: 5.04px solid transparent;
        border-top: 7px solid rgba(0, 0, 0, 0.8);
        transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        cursor: pointer;
      }
    }
    .rt-expander.-open {
      &:after {
        -webkit-transform: translate(-50%, -50%) rotate(0);
        transform: translate(-50%, -50%) rotate(0);
      }
    }
    .rt-resizer {
      display: inline-block;
      position: absolute;
      width: 36px;
      top: 0;
      bottom: 0;
      right: -18px;
      cursor: col-resize;
      z-index: 10;
    }
    .rt-tfoot {
      -webkit-box-flex: 1;
      -ms-flex: 1 0 auto;
      flex: 1 0 auto;

      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.15);
      .rt-td {
        border-right: 1px solid rgba(0, 0, 0, 0.05);
        &:last-child {
          border-right: 0;
        }
      }
    }
    .rt-th.-hidden {
      width: 0 !important;
      min-width: 0 !important;
      padding: 0 !important;
      border: 0 !important;
      opacity: 0 !important;
    }
    .rt-td.-hidden {
      width: 0 !important;
      min-width: 0 !important;
      padding: 0 !important;
      border: 0 !important;
      opacity: 0 !important;
    }
    .rt-resizing {
      .rt-th {
        transition: none !important;
        cursor: col-resize;
        user-select: none;
      }
      .rt-td {
        transition: none !important;
        cursor: col-resize;
        user-select: none;
      }
    }
  }
`;

export { TableStyles };
