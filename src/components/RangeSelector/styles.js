import styled from 'styled-components';
import { MEDIA } from 'styles/common';

const RangeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: auto;

  ${MEDIA.PHONE`
    width: 100%;
  `}

  ${MEDIA.TABLET`
    max-width: 420px;
  `};

  ${MEDIA.DESKTOP`
    max-width: 340px;
  `};
`;

const RangeItem = styled.div`
  font-size: 1.2rem;
  padding: 24px 0;
  width: 100%;
  text-align: center;
  ${({ isActive }) =>
    isActive
      ? `
      font-weight: 700;
      color: var(--blue);
      box-shadow: inset 0 -3px 0 0 #157efb;
    `
      : `
      font-weight: 400;
      color: var(--secondary-text);
      box-shadow: inset 0 -3px 0 0 transparent;
    `}
  border: 0;
  text-transform: uppercase;
  line-height: 1em;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    box-shadow: inset 0 -3px 0 0 #157efb;
    color: var(--blue);
    box-shadow: inset 0 -3px 0 0 #157efb;
    font-weight: 700;
  }
`;

export { RangeContainer, RangeItem };
