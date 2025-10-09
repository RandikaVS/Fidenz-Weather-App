const express = require('express');
const router = express.Router();
const { fetchWeather } = require('../controller/weather');
const cities = require("../cities.json");

const CITY_IDS = cities
  .map(c => Number(c.CityCode))
  .filter(id => !isNaN(id));


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


// GET /api/weather/all
// router.get('/all', async (req, res) => {
//   try {
    
//     const promises = CITY_IDS.map(id =>
//       fetchWeather(id).catch(e => ({ id, error: e.message }))
//     );
//     const results = await Promise.all(promises);
//     res.json(results);
//   } catch (err) {
//     console.error('Weather /all error:', err);
//     res.status(500).json({ error: err.message });
//   }
// });




module.exports = router;
