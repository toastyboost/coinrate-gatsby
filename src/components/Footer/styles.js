import styled from 'styled-components';
import { Wrap, MEDIA } from 'styles/common';

const FooterContainer = styled.footer`
  background-color: #252525;
  box-shadow: 0 -10px 125px rgba(0, 0, 0, 0.1), inset 0 4px 0 transparent;
  border-top: 1px solid rgba(0, 0, 0, 1);

  ${MEDIA.PHONE`
    padding: 36px 0 72px 0;
  `};

  ${MEDIA.DESKTOP`
    padding: 36px 0 36px 0;
 `};
`;

const FooterWrap = styled(Wrap)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const FooterLogo = styled.div`
  .logo {
    position: relative;
    z-index: 100;
    border: 10px solid #252525;
    width: 48px;
    height: 48px;
  }

  .title {
    display: none;
  }

  &:before {
    content: '';
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    display: block;
    width: 100%;
    max-width: 820px;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto 0 auto;
    transform: translateY(24px);
  }
`;

const FooterCopyright = styled.div`
  font-size: 1rem;
  color: var(--secondary-text);
  text-align: center;
  width: 100%;
`;

const FooterLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin-bottom: 12px;
`;

const FooterLink = styled.a`
  text-transform: uppercase;
  font-size: 1.4rem;
  line-height: 1em;
  font-weight: 700;
  padding: 6px 18px;
  color: #fff;

  &:hover {
    color: #2184fb;
  }
`;

export {
  FooterContainer,
  FooterWrap,
  FooterLogo,
  FooterCopyright,
  FooterLinks,
  FooterLink,
};
