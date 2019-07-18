import React from 'react';

import { Logo } from 'components';

import {
  FooterContainer,
  FooterWrap,
  FooterLogo,
  FooterCopyright,
  FooterLinks,
  FooterLink,
} from './styles';

import { menuItems } from './constants';

const Footer = () => (
  <FooterContainer>
    <FooterWrap>
      <FooterLinks>
        {menuItems.map(({ name, slug }, key) => (
          <FooterLink key={key} href={`/${slug}/`}>
            {name}
          </FooterLink>
        ))}
      </FooterLinks>
      <FooterLogo>
        <Logo />
      </FooterLogo>
      <FooterCopyright>2017 — 2018</FooterCopyright>
    </FooterWrap>
  </FooterContainer>
);

export { Footer };
