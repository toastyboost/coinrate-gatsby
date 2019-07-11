import React from 'react';
import { Main, LayoutWrap } from './styles';

import { Header, Footer } from 'components';

const Layout = ({ children, page }) => (
  <>
    <Header />
    <Main>
      <LayoutWrap page={page}>{children}</LayoutWrap>
    </Main>
    <Footer />
  </>
);

export { Layout };
