import styled from 'styled-components';

const ButtonPseudo = `
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

const Button = styled.div`
  position: relative;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

const PrevPage = styled(Button)`
  width: 36px;
  height: 36px;
  &:before {
    ${ButtonPseudo}
    transform: rotate(225deg);
    left: 19px;
  }
`;

const NextPage = styled(Button)`
  width: 36px;
  height: 36px;

  &:before {
    ${ButtonPseudo}
    transform: rotate(405deg);
    right: 19px;
  }
`;

const PageItem = styled.a`
  position: relative;
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
  height: 20px;
  font-weight: 700;
  transition: 0.3s;
  cursor: pointer;

  ${({ isActive }) =>
    isActive &&
    `
      color: #fff;
      background-color: var(--blue);
  `}

  &:hover {
    color: #fff;
    background-color: var(--blue);
  }
`;

const TableContainer = styled.div`
  margin-top: 24px;
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

const Pages = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
`;

export { TableContainer, PagesContainer, Pages, PrevPage, NextPage, PageItem };
