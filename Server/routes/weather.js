const express = require('express');
const router = express.Router();
const { fetchWeather } = require('../controller/weather');
const cities = require("../cities.json");
const checkAuth = require('../middleware/checkAuth');

const CITY_IDS = cities
  .map(c => Number(c.CityCode))
  .filter(id => !isNaN(id));


router.use(checkAuth);

router.get('/all', async (req, res) => {
  try {
    const promises = CITY_IDS.map((id, index) =>
      fetchWeather(id, index).catch(e => ({ id, error: e.message }))
    );
    const results = await Promise.all(promises);
    res.json(results);
  } catch (err) {
    console.error('Weather /all error:', err);
    res.status(500).json({ error: err.message });
  }
});


router.get('/id/:cityId', async (req, res) => {
  try {
    const cityId = Number(req.params.cityId);
    if (isNaN(cityId)) {
      return res.status(400).json({ error: "Invalid city ID" });
    }

    const index = CITY_IDS.indexOf(cityId);
    if (index === -1) {
      return res.status(404).json({ error: "City ID not found in cities list" });
    }

    const result = await fetchWeather(cityId, index);
    res.json(result);
  } catch (err) {
    console.error('Weather /id/:cityId error:', err);
    res.status(500).json({ error: err.message });
  }
});





module.exports = router;
