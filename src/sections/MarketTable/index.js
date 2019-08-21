import React, { useEffect } from 'react';

import { compose } from 'redux';
import { useDispatch } from 'react-redux';

import { withMarketData, withSymbolChart } from 'store/hocs';

import { Table } from 'components';

import { MarketTableContainer } from './styles';
import { marketColumns } from './columns';

const TheTable = ({
  start = 0,
  limit = 0,
  getMarketData,
  getSymbolChart,
  marketData = [],
  SSR = {},
}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMarketData({ limit: 30, start: 0 }));
    dispatch(getMarketData({ limit, start }));
  }, []);

  const { ssrData } = SSR;

  // хуйня - прокидывается 2 обьекта с SSR

  const columns = React.useMemo(() => marketColumns, []);
  const data = process.browser
    ? React.useMemo(() => marketData, [marketData])
    : ssrData;

  // хуйня - прокидывается 2 обьекта с SSR

  return (
    <MarketTableContainer>
      {data && (
        <Table
          columns={columns}
          data={data}
          start={start}
          limit={limit}
          SSR={SSR}
          pageSize={30}
          fetchData={{
            getSymbolChart, // хуйня - сделать вызов графиков на хук после прихода даты
          }}
        />
      )}
    </MarketTableContainer>
  );
};

const MarketTable = compose(
  withMarketData,
  withSymbolChart
)(TheTable);

export { MarketTable };
