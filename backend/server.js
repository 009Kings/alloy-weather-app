require('dotenv').config()
const PORT = process.env.PORT || 8000
const axios = require('axios').default
const express = require('express')
const NodeGeocoder = require('node-geocoder');
const cors = require('cors');
const db = require('./models')

const app = express()
const geocoder = NodeGeocoder({ provider: 'opencage', apiKey: process.env.OPENCAGE_KEY })

app.use(cors({
  origin: 'http://localhost:3000'
}));
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('/', async(req, res) => {
  if (!req.query.q) {
    res.status(412).send('Invalid search query')
  } else {
    try {
      let response = await geocoder.geocode(req.query.q);
      let data = response.filter(result => result.city && !result.streetName)
      if (data.length === 0) {
        throw new Error('Something went wrong!')
      }
      let placeName = `${data[0].city}, ${data[0].state ? `${data[0].state}, ` : ''}${data[0].country}`
      console.log(data[0])
      res.redirect(`/results?lat=${data[0].latitude}&lon=${data[0].longitude}&name=${placeName}`)
    } catch (err) {
      console.log('🔥', err)
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
      console.log(dayInfo.weather)
      return {
        dt: dayInfo.dt,
        high: dayInfo.temp.max,
        low: dayInfo.temp.min,
        desc: dayInfo.weather[0].description,
        icon: dayInfo.weather[0].icon
      }
    })
    res.send({ results: data, placeName: req.query.name});
  } catch (err) {
    console.log('🔥', err)
    res.status(500).send(`Something went wrong! ${err}`)
  }
})

app.post('/auth/signup', async(req, res) => {
  // TODO find or create
  try {
    let [user, created] = await db.user.findOrCreate({
      where: { email: req.body.email },
      defaults: {
        name: req.body.name,
        password: req.body.password
      }
    })
    if (!created) {
      throw new Error('User Already Exists')
    } else {
      res.status(200).send(user.toJSON())
    }
  } catch (err) {
    console.log('🔥', err)
    res.status(500).send(`Something went wrong! ${err}`)
  }
})

app.post('/auth/login', async(req, res) => {
  try {
    let user = await db.user.findOne({
      where: { email: req.body.email, password: req.body.password}
    })
    if (!user) {
      throw new Error('Invalid Login Credentials')
    } else {
      res.status(200).send(user.toJSON())
    }
  } catch (err) {
    console.log('🔥', err)
    res.status(500).send(`Something went wrong! ${err}`)
  }
})

// TODO: GET /forecasts — index all forecasts of a use

// TODO: POST /forecasts — add a forecast to fave

// TODO: DELETE /forecasts — Delete a forecast

app.listen(
  PORT, 
  () => console.log(`🎧 You're listening to the smooths sounds of port ${PORT} 🎧`)
)