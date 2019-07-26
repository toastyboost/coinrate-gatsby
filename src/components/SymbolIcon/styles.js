import styled from 'styled-components';

const IconWrap = styled.div`
  background-image: ${({ ticker, id }) =>
    `url(https://coinrate.com/static/crypto/${ticker.toLowerCase()}-${id.toLowerCase()}.svg?v=1)`};
  background-size: cover;
  background-position: 50%;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  transition: 0.3s;
`;

export { IconWrap };
