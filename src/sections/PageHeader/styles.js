import styled from 'styled-components';

const PageHeaderWrap = styled.div`
  margin: 24px 0 24px 0;
  text-align: center;
  text-transform: uppercase;
`;

const PageDescription = styled.div`
  font-size: 1.2rem;
  line-height: 1.4;
  font-weight: 400;

  color: var(--secondary-text);
  word-spacing: 2px;
  b {
    color: var(--text-color);
  }
`;

const PageTitle = styled.h1``;

export { PageHeaderWrap, PageTitle, PageDescription };
