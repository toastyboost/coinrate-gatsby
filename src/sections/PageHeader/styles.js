import styled from 'styled-components';
import { MEDIA } from 'styles/common';

const PageHeaderWrap = styled.div`
  margin: 36px 0 24px 0;
  text-align: center;
  text-transform: uppercase;
`;

const PageDescription = styled.div`
  line-height: 1.4;
  font-weight: 400;
  color: var(--secondary-text);
  word-spacing: 2px;
  margin: 0 auto;

  ${MEDIA.PHONE`
    max-width: 75%;
    margin-top: 6px;
    font-size: 1rem;
  `}

  ${MEDIA.SMARTPHONE`
    font-size: 1.2rem;
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
  line-height: 1.1;
  font-weight: 700;
  color: var(--text-color);

  ${MEDIA.PHONE`
      font-size: 1.5rem;
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

  em {
    display: block;
    width: 100%;
    font-size: 1.2rem;
    line-height: 1em;
    font-weight: 400;
    color: var(--secondary-text);
    margin-bottom: 16px;
    font-style: normal;
  }
`;

export { PageHeaderWrap, PageTitle, PageDescription };
