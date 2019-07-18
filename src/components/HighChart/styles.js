import styled from 'styled-components';

const ChartContainer = styled.div`
  position: relative;
`;

const UpdateCounter = styled.div`
  position: absolute;
  z-index: 9999;
  background-color: rgba(255, 255, 255, 0.9);
  width: 24px;
  border-radius: 25px;
  padding: 4px 8px 3px 8px;
  top: 10px;
  left: 20px;
  font-size: 0.8rem;
  line-height: 1em;
  text-transform: uppercase;
  text-align: center;
`;

export { ChartContainer, UpdateCounter };
