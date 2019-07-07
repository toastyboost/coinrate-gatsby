import styled from 'styled-components';
import { Wrap } from '../Layout/styles';

const HeaderContainer = styled.header`
  /* box-shadow: 0 0 9px 4px rgba(0, 0, 0, 0.05); */
`;

const GlobalData = styled.div`
  border-bottom: 1px solid var(--border-color);
  background-color: var(--panel-bg);
  font-size: 1rem;
  line-height: 1em;
  text-transform: uppercase;
  font-weight: 700;
`;

const HeaderData = styled.div`
  background-color: #fff;
  border-bottom: 1px solid var(--border-color);
`;

const HeaderWrap = styled(Wrap)`
  display: flex;
  flex-wrap: wrap;
`;

const Cap = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: 20px;
  padding: 12px 0;
  bottom: -2px;
  position: relative;
`;

const Volume = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: 20px;
  padding: 12px 0;
  bottom: -2px;
  position: relative;
`;

const DataTitle = styled.div`
  color: #8e8e90;
  margin: 0 6px 0 0;
`;

const DataValue = styled.div`
  margin: 0 6px;
  color: var(--text-color);
`;

const DataChange = styled.div`
  margin: 0 6px;
  color: var(--green);
`;

export {
  HeaderContainer,
  GlobalData,
  HeaderData,
  HeaderWrap,
  Cap,
  Volume,
  DataTitle,
  DataValue,
  DataChange,
};
