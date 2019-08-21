import React, { useEffect } from 'react';

import {
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
  Cta,
} from './styles';

import { withGlobalStats } from 'store/hocs';

import { Logo, Value, MarketSearch, MobileMenu } from 'components';
import Menu from './Menu';

const Block = ({ getGlobalStats, GlobalStats }) => {
  const { isLoading, data } = GlobalStats;

  useEffect(() => {
    getGlobalStats();
  }, []);

  return (
    <HeaderContainer>
      <GlobalData>
        <HeaderWrap>
          <Cap>
            <DataTitle>Market Cap</DataTitle>
            <DataValue>
              <Value value={!isLoading && data.CAP} />
            </DataValue>
            <DataChange>
              {!isLoading && <Value value={data.CHANGECAP24H} suffix="%" />}
            </DataChange>
          </Cap>
          <Volume>
            <DataTitle>Global Volume</DataTitle>
            <DataValue>
              {!isLoading && <Value value={data.VOLUME24HOUR} />}
            </DataValue>
            <DataChange>
              {!isLoading && (
                <Value value={data.CHANGEVOLUME24HOUR24H} suffix="%" />
              )}
            </DataChange>
          </Volume>
          <Cta
            // eslint-disable-next-line max-len
            href={`https://iqoption.com/lp/buying-crypto/en/?aff=38838&afftrack=headerCta&retrack=coinrate&type=crypto${''}`}
            target="_blank"
          >
            <span role="img" aria-label="thumb">
              ⭐
            </span>
            Best way to trade crypto
          </Cta>
          <Burger />
        </HeaderWrap>
      </GlobalData>
      <HeaderData>
        <NavigationWrap>
          <Logo />
          <Menu />
          <MarketSearch />
        </NavigationWrap>
      </HeaderData>
      <MobileMenu />
    </HeaderContainer>
  );
};

const Header = withGlobalStats(Block);

export { Header };
