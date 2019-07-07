const axios = require('axios');

const getData = () =>
  axios.get(
    'https://external-apis.iqoption.com/cryptoinfo/v1/symbol/infos?start=0&limit=30'
  );

exports.createPages = async ({ actions: { createPage } }) => {
  const allCrypto = await getData();
  const crptoNames = allCrypto.data.result.map(item => item.ID);

  crptoNames.forEach(id => {
    createPage({
      path: `/crypto/${id}`,
      component: require.resolve('./src/pages/crypto.js'),
      context: { id },
    });
  });
};
