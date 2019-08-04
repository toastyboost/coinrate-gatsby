import React from 'react';

import { Layout, Seo } from 'components';
import { NotFound } from 'sections';

const Page404 = () => (
  <>
    <Seo
      title={'Page not found | Coinrate.com'}
      desc={`Cryptocurrency market explorer: find coins prices charts, exchange rates and news.
              Compare crypto to make best trading decisions`}
    />
    <Layout>
      <NotFound />
    </Layout>
  </>
);

export default Page404;
