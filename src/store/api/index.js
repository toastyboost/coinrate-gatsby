import axios from './axios';

const fetchGlobalStats = () => axios.get('global');

const fetchSymbol = symbol => axios.get(`symbol/infos?syms=${symbol}`);

const fetchSymbolChart = (symbols, chartRange) =>
  axios.get(`symbol/charts?syms=${symbols}&range=${chartRange}`);

const fetchMarketData = (start = 0, limit = 0) =>
  axios.get(`symbol/infos?start=${start}&limit=${limit}`);

export { fetchGlobalStats, fetchSymbol, fetchSymbolChart, fetchMarketData };
