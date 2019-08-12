import React from 'react';

import { MenuContainer, MenuLink, Separator, SoonBadge } from './styles';
import { menuItems } from './data';

const Menu = () => (
  <MenuContainer>
    {menuItems.map(({ name, slug, isActive }, key) =>
      name === 'separator' ? (
        <Separator key={key} />
      ) : (
        <MenuLink
          key={key}
          href={`/${slug}${slug === '' ? '' : '/'}`}
          isActive={isActive}
          as={isActive ? 'a' : 'div'}
        >
          {name}
          {!isActive && <SoonBadge>soon</SoonBadge>}
        </MenuLink>
      )
    )}
  </MenuContainer>
);

export default Menu;
