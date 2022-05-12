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
* [Open Weather API](https://openweathermap.org/api/one-call-api) — API that handles our weather
* [Open Cage Data](https://opencagedata.com/) — Data source for our geocoding

### What's in my .ENV?

- *PORT*: Pick a port, any port! 
- *WEATHER_KEY*: API key for Open Weather API
- *OPENCAGE_KEY*: API key for Open Cage Data

### Routes

| path | Method|  function |
| / | GET or POST | take a user's query and turn it into lat/long. Redirect |
| /results | GET | index results for a specific query |
| /auth/signup | POST | Signup |
| /auth/login | POST | Login |
| /profile | GET | 🔒 Index a user's saved forecasts |

If there are more than two *cities* found with a query, it will send back a list. Front end will requery with the more specific option chosen.
Api issues rendered ^this useless. Instead will have a msg "Not the result you were expecting? Try being more specific"

### DB Structure

| Table name | description |
| users | user information |
| forecasts | stores information about a saved forecast | 

One user has many forecasts. Duplicate data? Shouldn't be an issue now, but might want to deal with that later.


### IN PROGRESS