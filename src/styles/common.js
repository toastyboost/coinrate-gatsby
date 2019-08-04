import styled, { css } from 'styled-components';

const BREAKPOINTS = {
  DESKTOP: 1024,
  TABLET: 768,
  SMARTPHONE: 425,
  PHONE: 320,
};

const MEDIA = Object.keys(BREAKPOINTS).reduce((acc, label) => {
  acc[`MAX_${label}`] = (...args) => css`
    @media (max-width: ${BREAKPOINTS[label] / 16}em) {
      ${css(...args)};
    }
  `;

  acc[label] = (...args) => css`
    @media (min-width: ${BREAKPOINTS[label] / 16}em) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});

const Wrap = styled.div`
  max-width: 1264px;
  width: 100%;
  margin: 0 auto;

  ${MEDIA.PHONE`
    padding: 0 6px;
  `}

  ${MEDIA.SMARTPHONE`
    padding: 0 16px;
  `}

  ${MEDIA.TABLET`
    padding: 0 20px;
  `}

  ${MEDIA.DESKTOP`
    padding: 0 24px;
  `};
`;

const BlockStyles = `
  border-radius: 2px;
  width: 100%;
  background-color: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 1px 15px rgba(0,0,0,.05), inset 0 4px 0 transparent;
`;

const Button = styled.a`
  position: relative;
  text-align: center;
  display: inline-block;
  transition: 0.3s;
  cursor: pointer;
`;

const RoundButton = styled(Button)`
  background-color: var(--blue);
  padding: 14px 28px 11px;
  color: #fff;
  border-radius: 50px;
  text-transform: uppercase;
  min-width: 160px;

  &:hover {
    background-color: var(--blue-dark);
  }
`;

export { BlockStyles, Wrap, RoundButton, MEDIA };
