import styled from 'styled-components';
import ReactTable from 'react-table';
import { NavButton } from './pagination';

const arrow = `
  position: relative;
  width: 36px;
  height: 36px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    opacity: 0.7;
  }
`;

const arrowBefore = `
  content: '';
  position: absolute;
  z-index: 10;
  bottom: 0;
  top: 0;
  margin: auto;
  width: 7.5px;
  height: 7.5px;
  border-right: 2.5px solid var(--blue);
  border-top: 2.5px solid var(--blue);
`;

const TableContainer = styled(ReactTable)`
  margin-top: 24px;

  .prev {
    ${arrow}
    &:before {
      ${arrowBefore}
      transform: rotate(225deg);
      left: 19px;
    }
  }

  .next {
    ${arrow}

    &:before {
      ${arrowBefore}
      transform: rotate(405deg);
      right: 19px;
    }
  }
`;

const PagesContainer = styled.div`
  border-top: 1px solid var(--border-color);
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.15);
  display: flex;
  align-content: center;
  align-items: center;
  width: 100%;
  font-size: 1rem;
  line-height: 1em;
`;

const VisiblePages = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 0;

  .item {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 0 8px;
    color: rgba(0, 0, 0, 0.7);
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 24px;
    padding: 5px 8px 4px 8px;
    min-width: 20px;
    font-weight: 700;
    cursor: pointer;
    transition: 0.3s;

    &.current {
      color: #fff;
      background-color: var(--blue);
    }

    &:hover {
      color: #fff;
      background-color: var(--blue);
    }
  }
`;

export { TableContainer, PagesContainer, VisiblePages };
