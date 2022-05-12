require('dotenv').config()
const PORT = process.env.PORT || 8000
const express = require('express')
const NodeGeocoder = require('node-geocoder');

const app = express()
const geocoder = NodeGeocoder({ provider: 'opencage', apiKey: process.env.OPENCAGE_KEY })

app.get('/', async(req, res) => {
  if (!req.query.q) {
    res.status(412).send('Invalid search query')
  } else {
    try {
      const results = await geocoder.geocode(req.query.q);
      let data = results.filter(result => result.city && !result.streetName)
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

app.get('/results', (req, res) => {
  res.send(req.query);
});

app.listen(
  PORT, 
  () => console.log(`🎧 You're listening to the smooths sounds of port ${PORT} 🎧`)
)