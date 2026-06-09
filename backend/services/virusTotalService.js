const axios = require('axios');

const scanUrl = async (url) => {
  const encodedUrl = Buffer.from(url).toString('base64').replace(/=/g, '');
  const res = await axios.get(`https://www.virustotal.com/api/v3/urls/${encodedUrl}`, {
    headers: { 'x-apikey': process.env.VIRUSTOTAL_API_KEY }
  });
  return res.data;
};

module.exports = { scanUrl };