const setFormat = (value, type) =>
  Math.abs(Number(value)) >= 1.0e12
    ? Math.abs(Number(value)) / 1.0e12
    : Math.abs(Number(value)) >= 1.0e9
    ? Math.abs(Number(value)) / 1.0e9
    : Math.abs(Number(value)) >= 1.0e6
    ? Math.abs(Number(value)) / 1.0e6
    : value < 1000000 && value > 100000
    ? Math.abs(Number(value)) / 1.0e3
    : value === 0 || value === 0.0 || value === 0.0
    ? 0
    : type === 'clean'
    ? parseFloat(value.toString().replace('-', ''))
    : value;

const setDirection = value => {
  return value > 0 ? 'up' : value < 0 ? 'down' : 'none';
};

const setPrefix = prefix => {
  return !prefix ? '' : prefix === '$' ? '$' : prefix + ' ';
};

const setSuffix = (value, suffix) => {
  return suffix && suffix !== '%'
    ? ' ' + suffix
    : suffix === '%'
    ? '%'
    : Math.abs(Number(value)) >= 1.0e12
    ? 'T'
    : Math.abs(Number(value)) >= 1.0e9
    ? 'B'
    : Math.abs(Number(value)) >= 1.0e6
    ? 'M'
    : value < 1000000 && value > 100000
    ? 'K'
    : '';
};

const setDecimals = (value, type, suffix) => {
  return type && type === 'simple'
    ? 0
    : type && type === 'kwh'
    ? 3
    : type && type === 'money'
    ? 2
    : value < 1 && value > 0 && suffix !== '%'
    ? 6
    : 2;
};

export { setFormat, setDirection, setPrefix, setSuffix, setDecimals };
