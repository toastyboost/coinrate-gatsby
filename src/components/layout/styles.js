import styled from 'styled-components';
import { Wrap, MEDIA } from 'styles/common';

const LayoutWrap = styled(Wrap)`
  min-height: calc(100vh - 206px);
  max-width: ${({ page }) => (page === 'crypto' ? '100%' : '1264px')};

  ${MEDIA.PHONE`
    padding: ${({ page }) => (page === 'crypto' ? '0' : '0 24px')};
  `}
`;

const Main = styled.main`
  padding: 0 0 40px 0;
`;

export { Main, LayoutWrap };
