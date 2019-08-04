import React, { useEffect } from 'react';

import { ExchangesContainer } from './styles';

import { withExchanges } from 'store/hocs';

import { Table } from 'components';
import { exchangesColumns } from './columns';

const Block = ({ getExchanges, exchangesData = [], dispatch, SSR = {} }) => {
  useEffect(() => {
    dispatch(getExchanges());
  }, []);

  const { ssrData } = SSR;

  const columns = React.useMemo(() => exchangesColumns, []);
  const data = process.browser
    ? React.useMemo(() => exchangesData, [exchangesData])
    : ssrData;

  return (
    <ExchangesContainer>
      {data && <Table columns={columns} data={data} SSR={SSR} pageSize={30} />}
    </ExchangesContainer>
  );
};

const ExchangesTable = withExchanges(Block);

export { ExchangesTable };
