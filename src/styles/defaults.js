import { createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${Normalize};

  :root {
    --main-font: 'Gilroy';
    --text-color: rgba(0,0,0,.85);
    --secondary-text: #8e8e90;
    --title-color: #333;
    --bg-color: #fff;
    --block-bg: #fff;
    --panel-bg: #f3f3f3;
    --border-color: #eaeaea;
    --red: #ff4748;
    --green: #2e9e22;
    --blue: #157efb;
    --blue-light:  #0057ff;
    --turquoise: #59b4a8;
    --gray: #DDE5F3;
    --gray-light: #eaeaf0;
    --gray-dark: rgba(0,0,0,.3);
    --box-shadow: 0 0 9px 4px rgba(0,0,0,0.05);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body,
  html {
    font-family: var(--main-font);
    color: var(--text-color);
    font-size: 62.5%;
    line-height: 1.4;
    font-weight: 400;
    min-width: 320px;
    background-color: var(--bg-color);
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    height: 100%;
    -webkit-font-smoothing: antialiased;
  }

  body > div {
    height: 100% !important;
  }

  section {
    font-size: 1.6rem;
  }

  h1,
  h2,
  h3,
  h4 {
    font-family: var(--main-font);
    line-height: 1.2;
    color: var(--text-color);
  }

  h1 {
    font-size: 3.4rem;
  }

  p {
    font-family: var(--text-font);
  }

  button {
    border: 0;
  }

  a {
    transition: 0.2s;
    text-decoration: none;
    color: var(--black);

    &:hover {
      color: var(--gray-hover);
    }

    &:active {
      color: var(--gray-active);
    }
  }

  img {
    border: 0;
  }

  .Chart {
    overflow: hidden;
    position: relative;

    &__series {
      width: 100%;
      height: 230px;
      position: relative;
      overflow: hidden;

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
        background-image: linear-gradient(to top, rgba(0,0,0,0.08) 0, rgba(0,0,0,0) 40px);
      }

      &:after {
        top: -1px;
        background-image: linear-gradient(to bottom, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0) 40px);
      }

      .highcharts-container {
        z-index: 1000 !important;
      }

      .highcharts-axis-labels {
        transform: translateX(-2px);
      }

      .highcharts-series-group {
        transform: translateX(-3px) !important;
      }

      .highcharts-series-group .highcharts-area-series path:nth-child(1),
      .highcharts-series-group .highcharts-area-series path:nth-child(2) {
        transform: translateY(1px);
      }

      .highcharts-xaxis-grid {
        transform: translateY(-21px);
      }

      .highcharts-data-labels.highcharts-column-series {
        transform: translateY(-20px);
      }

      .highcharts-data-labels.highcharts-column-series .highcharts-data-label > span {
        background-color: var(--block-bg);
        box-shadow: 0 1px 15px rgba(0,0,0,0.15);
        transition: 0.2s;
        padding: 2px 3px 1px 3px;
      }
    }

    &:before,
    &:after {
      position: absolute;
      transform: rotate(-90deg);
      font-size: 1rem;
      color: var(--secondary-text);
    }

    &:before {
      content: 'Price';
      top: 100px;
      left: 0;
    }

    &:after {
      content: 'Volume';
      bottom: 60px;
      left: -6px;
    }

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
        text-transform: uppercase
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
          background-color: var(--blue)
        }
      }

      .cap .value {
        &:before {
          background-color: var(--gray-dark)
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
        content: "";
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
          display: none
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
  }


/*


.Chart__tooltip .price .value:before,
.Chart__tooltip .cap .value:before {
  content: '';
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: $highlight;
  margin-right: 5px;
  position: relative;
  top: -1px;
}
.Chart__tooltip .cap .value:before {
  background-color: rgba(0,0,0,0.3);
}

.Chart .chart-event {
  background-color: $highlight;
  color: $text-main--inverted;
  font-family: $title-font;
  padding: 3px 4px 1px 4px;
  text-transform: uppercase;
  font-size: 0.8rem;
  border-radius: 2px;
  position: relative;
  top: 0;
  left: 0;
  text-shadow: 0 0 -1px rgba(0,0,0,0.4);
  text-align: center;
  font-weight: 800;
}
.Chart .chart-event:after {
  transform: rotate(-180deg);
  position: absolute;
  bottom: -4px;
  margin: auto;
  left: 0;
  right: 0;
}
.Chart .highcharts-container {
  z-index: 100 !important;
}
.Chart .highcharts-series-1 .Chart__label {
  display: none;
}
.Chart .highcharts-grid {
  position: relative;
  z-index: 1;
}
.Chart .highcharts-axis-labels {
  background-color: $block-bg;
  position: relative;
  z-index: 101;
}
.Chart .highcharts-plot-background {
  stroke: $gridLine;
  stroke-width: 1;
}
.Chart .highcharts-series-group {
  position: relative;
  z-index: 100;
}


.Chart .highcharts-tooltip {
  z-index: 1000;
}


*/


`;

export { GlobalStyles };
