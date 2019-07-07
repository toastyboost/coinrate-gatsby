import { createGlobalStyle } from 'styled-components';
import {
  Gilroy400EOT,
  Gilroy400TTF,
  Gilroy400WOFF,
  Gilroy400WOFF2,
  Gilroy700EOT,
  Gilroy700TTF,
  Gilroy700WOFF,
  Gilroy700WOFF2,
  Gilroy900EOT,
  Gilroy900TTF,
  Gilroy900WOFF,
  Gilroy900WOFF2,
} from '../static/fonts';

const FontsStyles = createGlobalStyle`

@font-face {
    font-family: 'Gilroy';
    font-weight: 400;
    src: url('${Gilroy400EOT}');
    src: local("Gilroy"),
      url('${Gilroy400WOFF2}') format('woff2'),
      url('${Gilroy400WOFF}') format('woff'),
      url('${Gilroy400TTF}') format('truetype');
  }

  @font-face {
    font-family: 'Gilroy';
    font-weight: 700;
    src: url('${Gilroy700EOT}');
    src: local("Gilroy"),
      url('${Gilroy700WOFF2}') format('woff2'),
      url('${Gilroy700WOFF}') format('woff'),
      url('${Gilroy700TTF}') format('truetype');
  }

  /* @font-face {
    font-family: 'Gilroy';
    font-weight: 900;
    src: url('${Gilroy900EOT}');
    src: local("Gilroy"),
      url('${Gilroy900WOFF2}') format('woff2'),
      url('${Gilroy900WOFF}') format('woff'),
      url('${Gilroy900TTF}') format('truetype');
  } */


`;

export { FontsStyles };
