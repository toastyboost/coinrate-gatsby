import { css } from 'styled-components';

import {
  Gilroy400EOT,
  Gilroy400TTF,
  Gilroy400WOFF,
  Gilroy400WOFF2,
  Gilroy700EOT,
  Gilroy700TTF,
  Gilroy700WOFF,
  Gilroy700WOFF2,
} from '../static/fonts';

const FontsStyles = css`

  @font-face {
    font-family: 'Gilroy';
    font-weight: 400;
    font-display: swap;
    src: url('${Gilroy400EOT}?v=1');
    src: local('Gilroy'),
      url('${Gilroy400WOFF2}?v=1') format('woff2'),
      url('${Gilroy400WOFF}?v=1') format('woff'),
      url('${Gilroy400TTF}?v=1') format('truetype');
  }

  @font-face {
    font-family: 'Gilroy';
    font-weight: 700;
    font-display: swap;
    src: url('${Gilroy700EOT}?v=1');
    src: local('Gilroy'),
      url('${Gilroy700WOFF2}?v=1') format('woff2'),
      url('${Gilroy700WOFF}?v=1') format('woff'),
      url('${Gilroy700TTF}?v=1') format('truetype');
  }

`;

export { FontsStyles };
