import axios from 'axios';

import { timeRanges } from 'helpers/constants';

const baseURL = 'https://external-apis.iqoption.com/cryptoinfo/v1';

const fetchGlobalStats = () => axios.get(`${baseURL}/global`);

const fetchSymbol = symbol =>
  axios.get(`${baseURL}/symbol/infos?syms=${symbol}`);

const fetchSymbolChart = (symbols, chartRange = timeRanges[1]) =>
  axios.get(`${baseURL}/symbol/charts?syms=${symbols}&range=${chartRange}`);

const fetchMarketData = (start = 0, limit = 0) =>
  axios.get(`${baseURL}/symbol/infos?start=${start}&limit=${limit}`);

const fetchSymbolMarket = (symbols = null, start = 0, limit = 0) =>
  axios.get(
    `${baseURL}/market/infos?fsyms=${symbols}&start=${start}&limit=${limit}`
  );

const fetchExchanges = () => axios.get(`${baseURL}/exchange/infos`);

const fetchExchangeMarkets = name =>
  axios.get(`${baseURL}/market/infos?&e=${name}&limit=0`);

export {
  fetchGlobalStats,
  fetchSymbol,
  fetchSymbolChart,
  fetchMarketData,
  fetchSymbolMarket,
  fetchExchanges,
  fetchExchangeMarkets,
};
