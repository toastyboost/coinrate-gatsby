import React from 'react';

import { menuItems } from './data';
import { MenuContainer, MenuLink } from './styles';

const Menu = () => (
  <MenuContainer>
    {menuItems.map(({ name, slug }, key) => (
      <MenuLink key={key} href={`/${slug}`}>
        {name}
      </MenuLink>
    ))}
  </MenuContainer>
);

export default Menu;
