const axios = require('axios');

const API = process.env.API_URL;
const pageSize = parseInt(process.env.CRYPTO_ITEMS);
const pages = parseInt(process.env.PAGES);

const fetchMarket = (start, limit) =>
  axios.get(`${API}/symbol/infos?start=${start}&limit=${limit}`);

const fetchExchanges = () => axios.get(`${API}/exchange/infos`);

const fetchExchangeMarkets = name =>
  axios.get(`${API}/market/infos?&e=${name}&limit=0`);

exports.createPages = async ({ actions: { createPage } }) => {
  const allCrypto = await fetchMarket(0, 0);
  const allCryptoData = allCrypto.data.result;

  // Create main and table pages

  const marketPages = allCryptoData
    .filter((_, i) => (i % pageSize ? false : true))
    .map((_, key) => key);

  createPage({
    path: '/',
    component: require.resolve('./src/pages/_templates/index.js'),
    context: {
      SSR: {
        ssrData: allCryptoData.slice(0, pageSize),
        ssrTotal: marketPages.length,
        ssrPage: 1,
        ssrHref: '',
      },
    },
  });

  marketPages.forEach(item => {
    createPage({
      path: `/${item + 1}/`,
      component: require.resolve('./src/pages/_templates/index.js'),
      context: {
        SSR: {
          ssrData: allCryptoData.slice(
            item * pageSize,
            item * pageSize + pageSize
          ),
          ssrTotal: marketPages.length,
          ssrPage: item + 1,
          ssrHref: '/',
        },
      },
    });
  });

  // Create crypto pages

  const cryptoNames = allCryptoData
    .filter((_, key) => key < pages)
    .map(({ ID, TICKER, NAME }) => ({
      ID,
      TICKER,
      NAME,
    }));

  cryptoNames.forEach(symbol => {
    createPage({
      path: `/cryptocurrencies/${symbol.ID}/`,
      component: require.resolve('./src/pages/_templates/crypto.js'),
      context: { slug: symbol.ID, ticker: symbol.TICKER, name: symbol.NAME },
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
    component: require.resolve('./src/pages/_templates/exchanges.js'),
    context: {
      SSR: {
        ssrData: parcedAllExchangesData,
        ssrTotal: 1,
        ssrPage: 1,
        ssrHref: 'exchanges',
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
      component: require.resolve('./src/pages/_templates/exchange.js'),
      context: {
        slug: exchange.ID,
        name: exchange.NAME,
        SSR: {
          ssrData: exchangeMarkets.slice(0, pageSize),
          ssrTotal: marketsPages.length,
          ssrPage: 1,
          ssrHref: `/exchanges/${exchange.ID}`,
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
        component: require.resolve('./src/pages/_templates/exchange.js'),
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
            ssrHref: `/exchanges/${ID}`,
          },
        },
      });
    });
  }
};
