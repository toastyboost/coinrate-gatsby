import styled from 'styled-components';
import logoIMG from 'static/images/logo.svg';

const LogoContainer = styled.a`
  display: flex;
  align-items: center;
  overflow: hidden;

  &:hover {
    .title {
      opacity: 1;
      margin-left: 12px;
    }
  }
`;

const LogoImg = styled.div`
  background-image: url("${logoIMG}");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 28px;
  height: 28px;
  position: relative;
  z-index: 100;
`;

const LogoTitle = styled.div`
  font-weight: 900;
  text-transform: uppercase;
  font-size: 2.4rem;
  line-height: 1em;
  letter-spacing: -0.5px;
  opacity: 0;
  margin-left: -107px;
  margin-bottom: -3px;
  transition: 0.3s ease-in-out;
`;

export { LogoContainer, LogoImg, LogoTitle };
