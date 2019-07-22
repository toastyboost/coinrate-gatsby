import styled from 'styled-components';
import { Wrap, MEDIA } from 'styles/common';

const HeaderContainer = styled.header`
  /* box-shadow: 0 0 9px 4px rgba(0, 0, 0, 0.05); */
  .logotype {
    ${MEDIA.PHONE`
      display: none;
    `};

    ${MEDIA.DESKTOP`
      display: flex;
    `};
  }
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

  ${MEDIA.PHONE`
    padding: 0 9px 0 12px;
  `};

  ${MEDIA.DESKTOP`
    padding: 0 24px;
  `};
`;

const NavigationWrap = styled(Wrap)`
  display: flex;
  flex-wrap: wrap;

  ${MEDIA.PHONE`
    padding: 0;
  `};

  ${MEDIA.DESKTOP`
    padding: 0 24px;
  `};
`;

const Cap = styled.div`
  display: flex;
  flex-wrap: wrap;
  bottom: -2px;
  position: relative;
  padding: 12px 0;

  ${MEDIA.PHONE`
    margin-right: 0;
  `}

  ${MEDIA.SMARTPHONE`
    margin-right: 16px;
  `}
`;

const Volume = styled.div`
  display: flex;
  flex-wrap: wrap;
  bottom: -2px;
  position: relative;
  padding: 12px 0;

  ${MEDIA.PHONE`
    margin-right: 0;
    margin-left: auto;
  `}

  ${MEDIA.SMARTPHONE`
    margin-right: 16px;
    margin-left: 0;
  `}
`;

const DataTitle = styled.div`
  color: #8e8e90;

  ${MEDIA.PHONE`
    margin: 0 2px 0 0;
  `}

  ${MEDIA.SMARTPHONE`
    margin: 0 4px 0 0;
  `}
`;

const DataValue = styled.div`
  color: var(--text-color);

  ${MEDIA.PHONE`
    margin: 0 2px;
  `}

  ${MEDIA.SMARTPHONE`
    margin: 0 4px;
  `}
`;

const DataChange = styled.div`
  color: var(--green);

  ${MEDIA.PHONE`
    margin: 0 2px;
  `}

  ${MEDIA.SMARTPHONE`
    margin: 0 4px;
  `}
`;

const Burger = styled.div`
  ${MEDIA.PHONE`
    display: block;
  `};

  ${MEDIA.DESKTOP`
    display: none;
 `};
`;

export {
  HeaderContainer,
  GlobalData,
  HeaderData,
  HeaderWrap,
  NavigationWrap,
  Cap,
  Volume,
  DataTitle,
  DataValue,
  DataChange,
  Burger,
};
