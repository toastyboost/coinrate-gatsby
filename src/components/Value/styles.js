import styled from 'styled-components';
// import CountUp from 'react-countup';

const ValueCounter = styled.span`
  color: ${({ direction, suffix }) =>
    suffix === '%' && direction === 'up'
      ? 'var(--green)'
      : suffix === '%' && direction === 'down'
      ? 'var(--red)'
      : 'inherit'};
`;

const DirectionArrow = styled.div`
  position: relative;

  &:before {
    content: '';
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 6px 10px;
    display: block;

    ${({ direction }) =>
      direction === 'up'
        ? `
          border-color: transparent transparent #2e9e22
        `
        : `
        border-color: transparent transparent #ff4748;
        transform: rotate(180deg);
    `}
  }
`;

export { ValueCounter, DirectionArrow };
