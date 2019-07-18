import styled from 'styled-components';
import { MEDIA } from 'styles/common';

const MenuContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  box-shadow: 0 0 30px 5px rgba(0, 0, 0, 0.2);
  background-color: #f7f7f7;
  z-index: 10000;
  width: 100%;
  display: flex;
  justify-content: center;

  ${MEDIA.PHONE`
    padding: 0 36px;
  `};

  ${MEDIA.DESKTOP`
    display: none;
 `};
`;

const MenuLink = styled.a`
  border-bottom: 1px solid transparent;
  text-transform: uppercase;
  font-size: 1.2rem;
  line-height: 1em;
  font-weight: 700;
  padding: 24px 18px;
  box-shadow: inset 0 -3px 0 0 ${p => (p.isCurrent ? '#2184fb' : 'rgba(0, 0, 0, 0.05)')};

  &:hover {
    box-shadow: inset 0 -3px 0 0 #2184fb;
  }

  .name {
    position: relative;
    bottom: -2px;
  }
`;

export { MenuContainer, MenuLink };
