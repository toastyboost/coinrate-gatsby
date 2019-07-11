const axios = require('axios');

const API = 'https://external-apis.iqoption.com/cryptoinfo/v1';

const fetchMarket = () => axios.get(`${API}/symbol/infos?start=0&limit=30`);
const fetchExchanges = () => axios.get(`${API}/exchange/infos`);

exports.createPages = async ({ actions: { createPage } }) => {
  const allCrypto = await fetchMarket();
  const cryptoNames = allCrypto.data.result.map(({ ID, TICKER, NAME }) => ({
    ID,
    TICKER,
    NAME,
  }));

  cryptoNames.forEach(symbol => {
    createPage({
      path: `/cryptocurrencies/${symbol.ID}`,
      component: require.resolve('./src/pages/crypto.js'),
      context: { slug: symbol.ID, ticker: symbol.TICKER, name: symbol.NAME },
    });
  });

  const allExchanges = await fetchExchanges();
  const exchangesName = allExchanges.data.result.map(({ ID, NAME }) => ({
    ID,
    NAME,
  }));

  exchangesName.forEach(exchange => {
    createPage({
      path: `/exchanges/${exchange.ID}`,
      component: require.resolve('./src/pages/exchange.js'),
      context: { slug: exchange.ID, name: exchange.NAME },
    });
  });
};
