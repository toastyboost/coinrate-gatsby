import styled from 'styled-components';
import { MEDIA } from 'styles/common';

const MenuContainer = styled.div`
  ${MEDIA.PHONE`
    display: none;
    padding: 0;
  `};

  ${MEDIA.DESKTOP`
    display: flex;
    flex-wrap: wrap;
    padding: 0 24px;
 `};
`;

const MenuLink = styled.a`
  border-bottom: 1px solid transparent;
  text-transform: uppercase;
  font-size: 1.4rem;
  line-height: 1em;
  font-weight: 700;
  padding: 24px 18px;
  bottom: -2px;
  position: relative;

  &:hover {
    box-shadow: inset 0 -3px 0 0 #2184fb;
  }
`;

const Separator = styled.div`
  height: 100%;
  width: 1px;
  background-color: #e5e5e5;
  height: 16px;
  margin: auto 20px;
`;

export { MenuContainer, MenuLink, Separator };
