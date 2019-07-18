import styled from 'styled-components';
import { MEDIA } from 'styles/common';

const PageHeaderWrap = styled.div`
  text-align: center;
  text-transform: uppercase;

  ${MEDIA.PHONE`
    margin: 20px 0 12px 0;
  `}

  ${MEDIA.DESKTOP`
    margin: 36px 0 24px 0;
  `};
`;

const PageDescription = styled.div`

  font-weight: 400;
  color: var(--secondary-text);
  word-spacing: 2px;
  margin: 0 auto;

  ${MEDIA.PHONE`
    max-width: 75%;
    margin-top: 6px;
    font-size: 1rem;
    line-height: 1.2;
  `}

  ${MEDIA.SMARTPHONE`
    font-size: 1.2rem;
    line-height: 1.4;
  `}

  ${MEDIA.DESKTOP`
    max-width: 100%;
    margin-top: 0;
  `};

  b {
    color: var(--text-color);
  }
`;

const PageTitle = styled.div`
  font-family: var(--main-font);
  line-height: 1;
  font-weight: 700;
  color: var(--text-color);

  ${MEDIA.PHONE`
    font-size: 2rem;
    margin-bottom: 4px;
  `};

  ${MEDIA.TABLET`
    font-size: 2.8rem;
  `};

  ${MEDIA.DESKTOP`
    font-size: 3.4rem;
    margin-bottom: 8px;
   `};

  em {
    display: block;
    width: 100%;
    font-size: 1.2rem;
    line-height: 1em;
    font-weight: 400;
    color: var(--secondary-text);

    font-style: normal;
  }
`;

export { PageHeaderWrap, PageTitle, PageDescription };
