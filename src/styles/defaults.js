import { createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { MEDIA } from 'styles/common';

import { AnimationStyles } from './animations';
import { ChartStyles } from './chart';
import { TableStyles } from './table';
import { FontsStyles } from './fonts';

const GlobalStyles = createGlobalStyle`
  :root {
    --main-font: 'Gilroy';
    --text-color: rgba(0,0,0,.85);
    --secondary-text: #8e8e90;
    --title-color: #333;
    --bg-color: #fff;
    --block-bg: #fff;
    --panel-bg: #f3f3f3;
    --border-color: #eaeaea;
    --border-color-light: rgba(221,229,243,.4);
    --red: #ff4748;
    --green: #2e9e22;
    --blue: #157efb;
    --blue-dark: #0b6ada;
    --blue-light:  #0057ff;
    --turquoise: #59b4a8;
    --gray: #DDE5F3;
    --gray-light: #eaeaf0;
    --gray-dark: rgba(0,0,0,.3);
    --purple: #5349a0;
    --box-shadow: 0 1px 25px rgba(0,0,0,.1)
    --box-shadow--hover: 0 1px 25px rgba(0,0,0,.3)
  }

  ${FontsStyles};
  ${Normalize};

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body,
  html {
    font-family: 'Gilroy';
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
    line-height: 1.1;
    color: var(--text-color);
  }

  h1 {

    ${MEDIA.PHONE`
      font-size: 2rem;
    `};

    ${MEDIA.SMARTPHONE`
      font-size: 2rem;
    `};

    ${MEDIA.TABLET`
      font-size: 2.8rem;
    `};

    ${MEDIA.DESKTOP`
      font-size: 3.4rem;
    `};

  }

  p {
    font-family: var(--text-font);
  }

  button {
    border: 0;
  }

  input {
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

  ${ChartStyles}
  ${AnimationStyles}
  ${TableStyles}
`;

export { GlobalStyles };
