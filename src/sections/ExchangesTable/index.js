import React, { useEffect } from 'react';

import { ExchangesContainer } from './styles';

import { withExchanges } from 'store/hocs';

import { Table } from 'components';
import { tableColumns } from './columns';

const Block = ({ getExchanges, data }) => {
  useEffect(() => {
    getExchanges();
  }, []);

  if (!data) return false;

  return (
    <ExchangesContainer>
      <Table columns={tableColumns} tableData={data.data} />
    </ExchangesContainer>
  );
};

const ExchangesTable = withExchanges(Block);

export { ExchangesTable };
