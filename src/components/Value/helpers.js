const setFormat = value => {
  const val =
    value && Math.abs(Number(value)) >= 1.0e12
      ? Math.abs(Number(value)) / 1.0e12
      : Math.abs(Number(value)) >= 1.0e9
      ? Math.abs(Number(value)) / 1.0e9
      : Math.abs(Number(value)) >= 1.0e6
      ? Math.abs(Number(value)) / 1.0e6
      : value < 1000000 && value > 100000
      ? value
      : value === 0 || value === 0.0
      ? 0
      : value;

  return parseFloat(val.toString().replace('-', ''));
};

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
  return type === 'simple'
    ? 0
    : type === '$'
    ? 2
    : parseInt(value) < 1 && suffix !== '%'
    ? 6
    : 2;
};

export { setFormat, setDirection, setPrefix, setSuffix, setDecimals };
