# Sarah King's Weather App

To get started, fork and clone this repository. Frontend and Backend both have Readme's to help you get started.

## Option 2 Take Home Prompt
We would like you to build a simple weather app. Please don't spend more than 3-4 hours on this project.

Our stack is React and NodeJS (Express) and Mongo (although we will be migrating to Postgres soon!), so while it's not required that you use that exact same stack, we'd recommend aiming to use as much of that technology as possible.

## Requirements
Please create a simple weather app with the following features:

### Front End

Your app should display the forecast for three or more days for a given location. The location can be dynamic (Geolocation of the user) or captured by user input. We recommend using one of these weather API's to get the weather data, although alternatives are fine too:

https://openweathermap.org/api
https://www.weatherapi.com/
If the API's are being flakey or you want to prioritize other work above integrating into the live API, you can also stub out the API response in code or with a tool like json-server.

### Back End

A user can save a forecast for a given day into a database and then recall that forecast at a later point. As stated above, we currently use Mongo but are interested in migrating to a relational DB (Postgres), so either is fine to use for this exercise. Ideally you can talk to us about the trade-offs!

You do not need to deploy this to a hosting service (Heroku/AWS/Render), but we would like to be able to run it locally. **Please include any instructions for local setup in your project's README.**

## Stretch Goals
If you knock out our initial requirements under the suggested time limit, here are some other things you could focus on:

- **Styling** - CSS Whiz? Give your app a little personality and sparkle!
- **Testing** - How would you automate some tests for this application? Implement some End-to-End, Integration, or Unit Tests
- **Additional Features** - implement a new feature, such as saving locations, a random-location-chooser, etc.


#### Things to keep in mind

- **Git Hygiene** - We'll be looking at your commit history, and we're interested in how you organize your work in git.

- **Readability and Maintainability** - Don't let perfect be the enemy of good, but also keep code readability in mind. Will you know what your code is doing in a few months? Will we be able to see how your solution works?

- **Outside Help** - It's fine to consult guides, resources, StackOverflow, etc. as you build this, but please don't copy/paste an entire pre-written application. We want to talk to you about technical decisions, trade-offs, etc. and that will be hard if you didn't author most of the code we're talking about!
