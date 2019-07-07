import React from 'react';

import { LogoContainer, LogoImg, LogoTitle } from './styles';

const Logo = () => (
  <LogoContainer href="/">
    <LogoImg className="logo" />
    <LogoTitle className="title">coinrate</LogoTitle>
  </LogoContainer>
);

export { Logo };
