import styled from 'styled-components';
import { MEDIA } from 'styles/common';

const MenuContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  box-shadow: 0 0 50px 5px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  z-index: 10000;
  width: 100%;
  display: flex;
  justify-content: center;

  ${MEDIA.PHONE`
    padding: 0 24px;
  `};

  ${MEDIA.DESKTOP`
    display: none;
 `};
`;

const MenuLink = styled.a`
  border-bottom: 1px solid transparent;
  text-transform: uppercase;
  font-size: 1rem;
  line-height: 1em;
  font-weight: 700;
  padding: 24px 18px;
  bottom: -2px;
  position: relative;

  &:hover {
    box-shadow: inset 0 -3px 0 0 #2184fb;
  }

  .icon {
    &-exchanges {
      bottom: 30px;
      color: #000;
      position: absolute;
      width: 18px;
      height: 13px;
      border-radius: 1px;
      border: solid 2px var(--blue);
      margin: 0 auto;
      left: 0;
      right: 0;

      &:before {
        content: '';
        position: absolute;
        left: -3px;
        top: -2px;
        width: 0;
        height: 0;
        border-top: solid 3px white;
        border-bottom: solid 3px var(--blue);
        border-left: solid 3px white;
        border-right: solid 3px white;
      }

      &:after {
        content: '';
        position: absolute;
        right: -4px;
        bottom: -2px;
        width: 0;
        height: 0;
        border-top: solid 3px var(--blue);
        border-bottom: solid 3px white;
        border-left: solid 3px white;
        border-right: solid 3px white;
      }
    }

    &-market {
      bottom: 28px;
      color: #000;
      position: absolute;
      width: 19px;
      height: 18px;
      border-radius: 50%;
      border: solid 2px var(--blue);
      margin: 0 auto;
      left: 0;
      right: 0;

      &:before {
        content: '';
        position: absolute;
        left: 1px;
        top: 1px;
        width: 11px;
        height: 11px;
        border-radius: 85% 15%;
        transform: rotate(-45deg);
        border: solid 1px var(--blue);

        &:after {
          content: '';
          position: absolute;
          top: 7px;
          width: 15px;
          height: 1px;
          background-color: var(--blue);
        }
      }
    }
  }

  .name {
    position: relative;
    bottom: -12px;
  }
`;

export { MenuContainer, MenuLink };
