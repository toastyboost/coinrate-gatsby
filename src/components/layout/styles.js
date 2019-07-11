import styled from 'styled-components';
import { Wrap, MEDIA } from 'styles/common';

const LayoutWrap = styled(Wrap)`
  max-width: ${({ page }) => (page === 'crypto' ? '100%' : '1210px')};

  ${MEDIA.PHONE`
    padding: ${({ page }) => (page === 'crypto' ? '0' : 'padding: 0 24px')};;
  `}
`;

const Main = styled.main`
  padding: 0 0 40px 0;
`;

export { Main, LayoutWrap };
