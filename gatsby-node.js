const axios = require('axios');

const API = process.env.API_URL;
const pageSize = parseInt(process.env.CRYPTO_BY_PAGE);
const aboutData = require('./src/data/symbol-about.json');

const fetchMarket = () => axios.get(`${API}/symbol/infos?start=0&limit=0`);

const fetchExchanges = () => axios.get(`${API}/exchange/infos`);

const fetchExchangeMarkets = name =>
  axios.get(`${API}/market/infos?&e=${name}&limit=0`);

// Переписать этот треш

exports.createPages = async ({ actions: { createPage } }) => {
  const allCrypto = await fetchMarket();
  const allCryptoData = allCrypto.data.result;

  // Create main and table pages

  const marketPages = allCryptoData
    .filter((_, i) => (i % pageSize ? false : true))
    .map((_, key) => key);

  createPage({
    path: '/',
    component: require.resolve('./src/pages/templates/_index.js'),
    context: {
      SSR: {
        ssrData: allCryptoData.slice(0, pageSize),
        ssrTotal: marketPages.length,
        ssrPage: null,
        ssrPath: '/',
      },
    },
  });

  marketPages.forEach(item => {
    createPage({
      path: `/${item + 1}/`,
      component: require.resolve('./src/pages/templates/_index.js'),
      context: {
        SSR: {
          ssrData: allCryptoData.slice(
            item * pageSize,
            item * pageSize + pageSize
          ),
          ssrTotal: marketPages.length,
          ssrPage: item + 1,
          ssrPath: '/',
        },
      },
    });
  });

  // Create crypto pages

  const cryptoNames = allCryptoData.map(({ ID, TICKER, NAME }) => ({
    ID,
    TICKER,
    NAME,
  }));

  cryptoNames.forEach(symbol => {
    const textObj = aboutData.filter(item => item.id === symbol.ID);

    createPage({
      path: `/cryptocurrencies/${symbol.ID}/`,
      component: require.resolve('./src/pages/templates/_crypto.js'),
      context: {
        SSR: {
          slug: symbol.ID,
          ticker: symbol.TICKER,
          name: symbol.NAME,
          about: textObj[0] ? textObj[0].about : '',
        },
      },
    });
  });

  // Create exchanges page

  const allExchanges = await fetchExchanges();
  const allExchangesData = allExchanges.data.result;

  // reducer

  const parcedAllExchangesData = allExchangesData.map(item => ({
    RANK: item.RANK,
    COUNTRY: item.COUNTRY,
    ID: item.ID.toLowerCase().replace('.', '-'),
    EXCHANGEMARKETS: item.MARKETS,
    EXCHANGENAME: item.NAME.toLowerCase().replace('.', '-'),
    EXCHANGEVOLUME: item.VOLUME24HOUR,
    EXCHANGESHARE: item.VOLUME24HOURPCT * 10,
  }));

  createPage({
    path: '/exchanges',
    component: require.resolve('./src/pages/templates/_exchanges.js'),
    context: {
      SSR: {
        ssrData: parcedAllExchangesData,
        ssrTotal: 1,
        ssrPage: null,
        ssrPath: '/exchanges',
      },
    },
  });

  const exchangesNames = allExchangesData.map(({ ID, NAME }) => ({
    ID,
    NAME,
  }));

  for (const exchange of exchangesNames) {
    const exchangeMarketData = await fetchExchangeMarkets(exchange);

    // reducer

    const exchangeMarkets = [];

    const result = exchangeMarketData.data.result;

    for (let exchange in result) {
      for (let crypto in result[exchange]) {
        for (let currency in result[exchange][crypto]) {
          const market = [result[exchange][crypto][currency]];

          market.map(item =>
            exchangeMarkets.push({
              RANK: item.RANK,
              PRICECRYPTO: item.PRICE,
              PRICEUSD: item.PRICEUSD,
              MARKETVOLUME24HOUR: item.VOLUME24HOUR,
              CHANGE24HOUR: item.CHANGE24HOUR,
              FSYM: crypto.toLocaleLowerCase().replace('.', '-'),
              TSYM: currency.toLocaleLowerCase().replace('.', '-'),
              FSYMID: item.FSYMID.toLocaleLowerCase().replace('.', '-'),
              TSYMID: item.TSYMID.toLocaleLowerCase().replace('.', '-'),
            })
          );
        }
      }
    }

    const marketsPages = exchangeMarkets
      .filter((_, i) => (i % pageSize ? false : true))
      .map((_, key) => key);

    createPage({
      path: `/exchanges/${exchange.ID}/`,
      component: require.resolve('./src/pages/templates/_exchange.js'),
      context: {
        slug: exchange.ID,
        name: exchange.NAME,
        SSR: {
          ssrData: exchangeMarkets.slice(0, pageSize),
          ssrTotal: marketsPages.length,
          ssrPage: null,
          ssrPath: `/exchanges/${exchange.ID}/`,
        },
      },
    });
  }

  for (const exchangeItem of exchangesNames) {
    const { ID, NAME } = exchangeItem;
    const exchangeMarketData = await fetchExchangeMarkets(ID);

    // reducer

    const exchangeMarkets = [];

    const result = exchangeMarketData.data.result;

    for (let exchange in result) {
      for (let crypto in result[exchange]) {
        for (let currency in result[exchange][crypto]) {
          const market = [result[exchange][crypto][currency]];

          market.map(item =>
            exchangeMarkets.push({
              RANK: item.RANK,
              PRICECRYPTO: item.PRICE,
              PRICEUSD: item.PRICEUSD,
              MARKETVOLUME24HOUR: item.VOLUME24HOUR,
              CHANGE24HOUR: item.CHANGE24HOUR,
              FSYM: crypto.toLocaleLowerCase().replace('.', '-'),
              TSYM: currency.toLocaleLowerCase().replace('.', '-'),
              FSYMID: item.FSYMID.toLocaleLowerCase().replace('.', '-'),
              TSYMID: item.TSYMID.toLocaleLowerCase().replace('.', '-'),
            })
          );
        }
      }
    }

    const marketsPages = exchangeMarkets
      .filter((_, i) => (i % pageSize ? false : true))
      .map((_, key) => key);

    marketsPages.forEach(page => {
      createPage({
        path: `/exchanges/${ID}/${page + 1}/`,
        component: require.resolve('./src/pages/templates/_exchange.js'),
        context: {
          slug: ID,
          name: NAME,
          SSR: {
            ssrData: exchangeMarkets.slice(
              page * pageSize,
              page * pageSize + pageSize
            ),
            ssrTotal: marketsPages.length,
            ssrPage: page + 1,
            ssrPath: `/exchanges/${ID}/`,
          },
        },
      });
    });
  }
};
