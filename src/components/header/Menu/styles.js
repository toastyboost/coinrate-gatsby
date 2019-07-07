import styled from 'styled-components';

const MenuContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 24px;
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

  &:nth-child(2) {
    padding-right: 36px;

    &:after {
      content: '';
      height: 100%;
      width: 1px;
      border-left: 1px solid #e5e5e5;
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      margin: auto;
      height: 16px;
    }
  }

  &:nth-child(3) {
    padding-left: 36px;
  }

  &:hover {
    box-shadow: inset 0 -3px 0 0 #2184fb;
  }
`;

export { MenuContainer, MenuLink };
