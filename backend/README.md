# Getting Started with Weathered Backend

This is an Express backend with a Postgres server.

### Getting started

run `npm start` to get 'er up and running!

### Technologies used

* Express — for routing and general framework
* dotenv — for parsing our *secretssssss*
* Node-Geocoder — for turning text inputs into sweet sweet lat/long
* Axios — for the HTTP requests to our API
* Sequelize — Postgres ORM
* `sequelize-cli` - command line interface for Sequelize
* pg — postgres
* [Open Weather API](https://openweathermap.org/api/one-call-api) — API that handles our weather
* [Open Cage Data](https://opencagedata.com/) — Data source for our geocoding

## Setup

- Run `npm install`
- Update your `config.json` file in your `config` folder. It is currently set up for Mac which doesn't need a username or password. If you are running Linux or Windows you'll need to set that up. [More info here](https://sequelize.org/api/v6/class/src/sequelize.js~sequelize#instance-constructor-constructor).
- Make sure your Postgres server is running. [Postgres install here](https://www.postgresql.org/download/)
- Create an `alloy_weather` Database
- Run `seqeulize db:migrate` to migrate to your database
- Create an `.env` file with the parameters in the later section
- Run `npm start` to start the server!

### What's in my .ENV?

- *PORT*: Pick a port, any port! (not really, pick 5000 because that's what I have the front-end set to)
- *WEATHER_KEY*: API key for Open Weather API
- *OPENCAGE_KEY*: API key for Open Cage Data

### Routes

| path | Method|  function |
| / | GET or POST | take a user's query and turn it into lat/long. Redirect |
| /results | GET | index results for a specific query |
| /auth/signup | POST | Signup |
| /auth/login | POST | Login |
| /forecasts | GET | 🔒 Index a user's saved forecasts |
| /forecasts | POST | 🔒 Add a forecast associated with user |
| /forecasts | DELETE | 🔒 Remove a forecast |

### DB Structure

| Table name | description |
| users | user information |
| forecasts | stores information about a saved forecast | 

One user has many forecasts. Duplicate data? Shouldn't be an issue now, but might want to deal with that later.


