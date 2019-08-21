import styled from 'styled-components';
import { MEDIA, BlockStyles } from 'styles/common';
import { Cta } from 'components';

const SymbolCta = styled(Cta)`
  margin-top: 0;
  border-radius: 4px;
  max-width: 100%;
  width: 100%;
`;

const Container = styled.div`
  ${MEDIA.PHONE`
    width: calc(100% - 12px);
  `};

  ${MEDIA.DESKTOP`
    width: calc(30% - 12px);
  `};
  .Loader {
    margin-bottom: 24px;
  }
`;

const StatsBlock = styled.div`
  ${BlockStyles}
  padding: 24px 0 0 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const Title = styled.div`
  font-size: 2.1rem;
  line-height: 1;
  font-weight: 700;
  padding: 0 24px 16px 24px;
  width: 100%;
`;

const List = styled.div`
  padding-top: 5px;
  display: flex;
  flex-wrap: wrap;
  font-size: 1.2rem;
  line-height: 1;
  text-transform: uppercase;

  .value {
    font-weight: 700;
  }
`;

const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 24px;
  width: 100%;
  border-top: 1px solid var(--border-color);
`;

export { Container, Title, List, ListItem, SymbolCta, StatsBlock };
