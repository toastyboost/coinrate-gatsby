import React from 'react';

import { Logo } from 'components';

import {
  FooterContainer,
  FooterWrap,
  FooterLogo,
  FooterCopyright,
} from './styles';

const Footer = () => (
  <FooterContainer>
    <FooterWrap>
      <FooterLogo>
        <Logo />
      </FooterLogo>
      <FooterCopyright>2017 — 2018</FooterCopyright>
    </FooterWrap>
  </FooterContainer>
);

export { Footer };
