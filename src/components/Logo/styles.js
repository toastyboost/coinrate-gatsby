import styled from 'styled-components';
import logoIMG from 'static/images/logo.svg';

const LogoContainer = styled.a`
  display: flex;
  align-items: center;
`;

const LogoImg = styled.div`
  background-image: url("${logoIMG}");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 28px;
  height: 28px;
`;

const LogoTitle = styled.div`
  font-weight: 700;
  text-transform: uppercase;
  font-size: 2.4rem;
  line-height: 1em;
  margin-left: 12px;
`;

export { LogoContainer, LogoImg, LogoTitle };
