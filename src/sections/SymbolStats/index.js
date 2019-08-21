import React, { useEffect } from 'react';

import {
  Container,
  Title,
  List,
  ListItem,
  SymbolCta,
  StatsBlock,
} from './styles';

import { withSymbol } from 'store/hocs';
import { Loader, Value } from 'components';
import { dataItems } from './constants';

const Block = ({ symbol, getSymbol, symbolData, dispatch }) => {
  useEffect(() => {
    dispatch(getSymbol(symbol));
  }, []);

  const data = symbolData[symbol];

  return (
    <Container>
      <SymbolCta id={symbol} />
      <StatsBlock>
        {data ? (
          <>
            <Title>{data['NAME']} Statistics</Title>
            <List>
              {dataItems.map(({ title, dataKey, prefix, suffix }, key) => (
                <ListItem key={key}>
                  <span className="title">{title}</span>
                  <span>
                    <Value
                      value={
                        dataKey === 'SHARE'
                          ? data[dataKey] * 100
                          : data[dataKey]
                      }
                      prefix={prefix}
                      suffix={suffix}
                    />
                  </span>
                </ListItem>
              ))}
            </List>
          </>
        ) : (
          <Loader />
        )}
      </StatsBlock>
    </Container>
  );
};

const SymbolStats = withSymbol(Block);

export { SymbolStats };
