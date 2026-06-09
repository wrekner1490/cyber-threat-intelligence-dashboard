const express = require('express');
const router = express.Router();
const { scanUrl, scanIP } = require('../services/virusTotalService');
const { getIPInfo } = require('../services/shodanService');

router.get('/url', async (req, res) => {
  const result = await scanUrl(req.query.url);
  res.json(result);
});

router.get('/ip', async (req, res) => {
  const result = await getIPInfo(req.query.ip);
  res.json(result);
});

module.exports = router;