import axios from 'axios';

export default axios.create({
  method: 'get',
  baseURL: 'https://external-apis.iqoption.com/cryptoinfo/v1/',
  // baseURL: 'https://static.iqoption.com/cryptoinfo/v1/',
});
