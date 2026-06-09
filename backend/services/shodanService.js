const axios = require('axios');

const getIPInfo = async (ip) => {
  const res = await axios.get(`https://api.shodan.io/shodan/host/${ip}?key=${process.env.SHODAN_API_KEY}`);
  return res.data;
};

module.exports = { getIPInfo };