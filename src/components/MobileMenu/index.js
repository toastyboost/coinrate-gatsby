import React from 'react';

import { MenuContainer, MenuLink } from './styles';
import { menuItems } from './data';

const MobileMenu = () => (
  <MenuContainer>
    {menuItems.map(({ name, slug }, key) => (
      <MenuLink key={key} href={`/${slug}`}>
        <span className={`icon-${slug}`} />
        <span className="name">{name}</span>
      </MenuLink>
    ))}
  </MenuContainer>
);

export { MobileMenu };
