const axios = require('axios');
const path = require('path');

const API = process.env.API_URL;
const ITEMS = process.env.CRYPTO_ITEMS;

const fetchMarket = () =>
  axios.get(`${API}/symbol/infos?start=0&limit=${ITEMS}`);

const fetchExchanges = () => axios.get(`${API}/exchange/infos`);

exports.createPages = async ({ actions: { createPage } }) => {
  createPage({
    path: '/404.html',
    component: path.join(process.cwd(), 'src/pages/404.js'),
  });

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
