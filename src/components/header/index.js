import React, { useEffect } from 'react';

import {
  HeaderContainer,
  GlobalData,
  HeaderData,
  HeaderWrap,
  Cap,
  Volume,
  DataTitle,
  DataValue,
  DataChange,
} from './styles';

import { withGlobalStats } from 'store/hocs';

import { Logo, Value } from 'components';
import Menu from './Menu';

const Block = ({ getGlobalStats, GlobalStats }) => {
  const { isLoading, data } = GlobalStats;

  useEffect(() => {
    getGlobalStats();
  }, []);

  if (isLoading) {
    return false;
  }

  const { CAP, CHANGECAP24H, VOLUME24HOUR, CHANGEVOLUME24HOUR24H } = data;

  return (
    <HeaderContainer>
      <GlobalData>
        <HeaderWrap>
          <Cap>
            <DataTitle>Market Cap</DataTitle>
            <DataValue>
              <Value value={CAP} />
            </DataValue>
            <DataChange>
              <Value value={CHANGECAP24H} suffix="%" />
            </DataChange>
          </Cap>
          <Volume>
            <DataTitle>Todays Volume</DataTitle>
            <DataValue>
              <Value value={VOLUME24HOUR} />
            </DataValue>
            <DataChange>
              <Value value={CHANGEVOLUME24HOUR24H} suffix="%" />
            </DataChange>
          </Volume>
        </HeaderWrap>
      </GlobalData>
      <HeaderData>
        <HeaderWrap>
          <Logo />
          <Menu />
        </HeaderWrap>
      </HeaderData>
    </HeaderContainer>
  );
};

const Header = withGlobalStats(Block);

export { Header };
