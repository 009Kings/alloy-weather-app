require('dotenv').config()
const PORT = process.env.PORT || 8000
const axios = require('axios').default
const express = require('express')
const NodeGeocoder = require('node-geocoder');
const cors = require('cors');

const app = express()
const geocoder = NodeGeocoder({ provider: 'opencage', apiKey: process.env.OPENCAGE_KEY })

app.use(cors({
  origin: 'http://localhost:3000'
}));

app.get('/', async(req, res) => {
  if (!req.query.q) {
    res.status(412).send('Invalid search query')
  } else {
    try {
      let response = await geocoder.geocode(req.query.q);
      let data = response.filter(result => result.city && !result.streetName)
      if (data.length === 0) {
        res.status(412).send('Query needs to be a city name')
      }
      let placeName = `${data[0].city}, ${data[0].state ? `${data[0].state}, ` : ''}${data[0].country}`
      console.log(data[0])
      res.redirect(`/results?lat=${data[0].latitude}&lon=${data[0].longitude}&name=${placeName}`)
    } catch (err) {
      res.status(500).send(`Something went wrong! ${err}`)
    }
  }
})

app.get('/results', async(req, res) => {
  if (!req.query.lat || !req.query.lon) {
    res.status(412).send('Invalid search query')
    return
  }
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${req.query.lat}&lon=${req.query.lon}&exclude=minutely,hourly,current,alerts&appid=${process.env.WEATHER_KEY}`);
    let data = response.data.daily.map(dayInfo => {
      return {
        dt: dayInfo.dt,
        high: dayInfo.temp.max,
        low: dayInfo.temp.min,
        desc: dayInfo.weather.description,
        icon: dayInfo.weather.icon
      }
    })
    res.send({ results: data, placeName: req.query.name});
  } catch (err) {
    res.status(500).send(`Something went wrong! ${err}`)
  }
});

app.listen(
  PORT, 
  () => console.log(`🎧 You're listening to the smooths sounds of port ${PORT} 🎧`)
)