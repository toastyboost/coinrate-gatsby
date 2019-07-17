import styled from 'styled-components';
import { RoundButton } from 'styles/common';

const CtaButton = styled(RoundButton)`
  font-size: 1.4rem;
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 16px;
  max-width: 200px;

  &:hover {
    color: rgba(255, 255, 255, 0.75);
  }

  span {
    font-size: 1rem;
    line-height: 1em;
    font-weight: 400;
    width: 100%;
    display: block;
    opacity: 0.7;
    text-transform: capitalize;
  }
`;
export { CtaButton };
