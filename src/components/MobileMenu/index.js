import React from 'react';

import { MenuContainer, MenuLink } from './styles';
import { menuItems } from './data';

const MobileMenu = () => {
  const route =
    typeof window !== 'undefined' &&
    window.location.pathname.replace(/\//g, '');

  return (
    <MenuContainer>
      {menuItems.map(({ name, slug }, key) => (
        <MenuLink key={key} href={`/${slug}`} isCurrent={route === slug}>
          <span className={`icon-${slug}`} />
          <span className="name">{name}</span>
        </MenuLink>
      ))}
    </MenuContainer>
  );
};

export { MobileMenu };
