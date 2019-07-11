import React from 'react';

import { MenuContainer, MenuLink, Separator } from './styles';
import { menuItems } from './data';

const Menu = () => (
  <MenuContainer>
    {menuItems.map(({ name, slug }, key) =>
      name === 'separator' ? (
        <Separator key={key} />
      ) : (
        <MenuLink key={key} href={`/${slug}`}>
          {name}
        </MenuLink>
      )
    )}
  </MenuContainer>
);

export default Menu;
