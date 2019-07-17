import styled from 'styled-components';
import { Wrap } from 'styles/common';
import { Cta } from 'components';

const BlockWrap = styled(Wrap)`
  display: flex;
  flex-wrap: wrap;
`;

const MarketTableContainer = styled.div``;

const MarketCta = styled(Cta)`
  margin: 0 auto;
  padding: 12px 48px;
`;

export { MarketTableContainer, BlockWrap, MarketCta };
