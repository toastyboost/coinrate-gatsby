const timeRanges = ['24h', '7d', '1m', '3m', '1y', 'ytd', 'all'];
const updateInterval = 60000;
const updateIntervalSecs = updateInterval / 1000;

const availiableAssets = [
  'bitcoin',
  'cosmos',
  'stellar',
  'binance-coin',
  'litecoin',
  'iota',
  'nem',
  'cardano',
  'zcash',
  'bitcoin-cash',
  'eos',
  'ethereum',
  'tron',
  'dash',
  'ontology',
  'neo',
  'qtum',
  'omisego',
  'bitcoin-sv',
];

const availiableCurrenciesAssets = [
  'AUD',
  'CAD',
  'CHF',
  'EUR',
  'GBP',
  'HKD',
  'IDR',
  'JPY',
  'KRW',
  'MYR',
  'NGN',
  'NZD',
  'PLN',
  'RUB',
  'SGD',
  'UAH',
  'USD',
  'ZAR',
];

export {
  timeRanges,
  updateInterval,
  updateIntervalSecs,
  availiableAssets,
  availiableCurrenciesAssets,
};
