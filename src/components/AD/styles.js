import styled from 'styled-components';
import { MEDIA } from 'styles/common';

import callIMG from 'static/images/call.svg';

const AdContainer = styled.a`
  opacity: ${p => (p.isVisible ? 1 : 0)};
  border-radius: 3px;
  overflow: hidden;
  position: fixed;
  color: var(--text-color);
  background-color: #fff;
  box-shadow: 0 1px 25px rgba(0, 0, 0, 0.2), inset 0 4px 0 transparent;
  z-index: 9999;
  display: flex;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    box-shadow: 0 1px 25px rgba(0, 0, 0, 0.3), inset 0 4px 0 transparent;
  }

  svg {
    max-width: 190px;
    width: 100%;
    height: 80px;
    margin: 0 auto;
  }

  ${MEDIA.PHONE`
    bottom: 84px;
    right: 0;
    left: 0;
    margin: auto;
    max-width: 290px
  `};

  ${MEDIA.SMARTPHONE`
    margin: 0 0 0 auto;
    right: 36px;
    bottom: 84px;

  `};

  ${MEDIA.DESKTOP`
    bottom: 36px;
 `};
`;

const AdChange = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: -4px;
  margin: auto;
  border-radius: 3px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  padding: 0 32px;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    bottom: -1px;
    background-image: linear-gradient(
      to right,
      rgba(246, 246, 246, 1) 0%,
      rgba(246, 246, 246, 0) 100%
    );
  }

  .value {
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 1em;
    text-transform: uppercase;
    z-index: 100;
    margin-left: -12px;
  }

  .title {
    text-transform: uppercase;
    z-index: 100;
    font-size: 1rem;
    line-height: 1em;
    text-transform: uppercase;
    width: 100%;
    margin-top: 2px;

    em {
      font-style: normal;
      color: var(--secondary-text);
      display: block;
      font-size: 0.8rem;
    }
  }
`;

const AdChart = styled.div`
  display: flex;
  opacity: 0.35;
  position: relative;
  bottom: -2px;
`;

const AdCta = styled.div`
  &:before {
    content: '';
    display: block;
    background-image: url('${callIMG}');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 20px;
    height: 20px;
    margin-bottom: 9px;
  }

  background-color: var(--blue);
  color: #fff;
  padding: 0 12px;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  width: 100px;
  font-size: 1.2rem;
  line-height: 1em;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  text-shadow: 0 0 1px rgba(0, 0, 0, 0.5);
  position: relative;
  z-index: 100;
`;

export { AdContainer, AdChange, AdChart, AdCta };
