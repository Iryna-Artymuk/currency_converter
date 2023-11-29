// services/dataService.js

import axios from 'axios';

axios.defaults.baseURL = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies`;

const getCurrencyRateData = async (from) => {
  const { data } = await axios.get(`/${from}.json`);

  return data;
};

export default getCurrencyRateData;
