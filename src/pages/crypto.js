import React from 'react';

import { Layout } from 'components';

import { GlobalStyles, FontsStyles, TableStyles } from '../styles';

const Crypto = ({ pageContext: { id } }) => (
  <>
    <GlobalStyles />
    <FontsStyles />
    <TableStyles />
    <Layout>Crypto page</Layout>
  </>
);

export default Crypto;
