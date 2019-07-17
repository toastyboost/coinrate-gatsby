const path = {
  static: 'https://coinrate.com/static',
};

const defaultFraction = {
  minimumFractionDigits: 1,
  maximumFractionDigits: 2,
};

const CountryNames = {
  us: 'United States',
  uk: 'United Kingdom',
  ru: 'Russian Federation',
  cn: 'China',
  hk: 'Hong Kong',
  kr: 'Korea',
  jp: 'Japan',
  es: 'Spain',
  nz: 'New Zealand',
};

const colors = {
  green: '#157efb',
  red: '#157efb',
  blue: '#157efb',
  blueLight: '#b2ccff',
  gridLine: 'rgba(221, 229, 243,0.5)',
  chart: {
    textColor: 'rgba(108, 108, 108,1)',
    labelColor: 'rgba(0,0,0, 1.5)',
    crossHair: 'rgba(0,0,0, 0.25)',
    blueGradient: [[0, 'rgba(0, 87, 255,0.06)'], [1, 'rgba(0, 87, 255, 0.1)']],
    greenGradient: [[0, 'rgba(0, 87, 255, 0.1)'], [1, 'rgba(0, 87, 255,0)']],
    redGradient: [[0, 'rgba(0, 87, 255, 0.1)'], [1, 'rgba(0, 87, 255,0)']],
    column: {
      blueGradient: [
        [0, 'rgba(0, 87, 255, 0.08)'],
        [1, 'rgba(0, 87, 255,0.26)'],
      ],
    },
  },
};

const numbersToSymbol = value => {
  return Math.abs(Number(value)) >= 1.0e9
    ? (Math.abs(Number(value)) / 1.0e9).toLocaleString('en', defaultFraction) +
        'B'
    : Math.abs(Number(value)) >= 1.0e6
    ? (Math.abs(Number(value)) / 1.0e6).toLocaleString('en', defaultFraction) +
      'M'
    : Math.abs(Number(value)) >= 1.0e3
    ? (Math.abs(Number(value)) / 1.0e3).toLocaleString('en', defaultFraction) +
      'K'
    : value.toFixed(2);
};

const getStaticPath = (type, ticker, id) => {
  return (
    path.static +
    '/' +
    type +
    '/' +
    ticker.toLowerCase() +
    '-' +
    id.toLowerCase() +
    '.svg?v=1'
  );
};

export const convertTimestamp = timestamp => {
  var d = new Date(timestamp),
    yyyy = ('' + d.getFullYear() + '').slice(2),
    mm = ('0' + (d.getMonth() + 1)).slice(-2),
    dd = ('0' + d.getDate()).slice(-2),
    HH = ('0' + d.getHours()).slice(-2),
    MM = ('0' + d.getMinutes()).slice(-2),
    time;

  time = dd + '.' + mm + '.' + yyyy + ' | ' + HH + ':' + MM;

  return time;
};

export { colors, getStaticPath, numbersToSymbol, CountryNames };
