import React from 'react';
import { Main, Wrap } from './styles';

import { Header, Footer } from 'components';

const Layout = ({ children }) => (
  <>
    <Header />
    <Main>
      <Wrap>{children}</Wrap>
    </Main>
    <Footer />
  </>
);

export { Layout };
