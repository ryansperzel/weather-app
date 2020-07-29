# Weather App Challenge

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Getting Started

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## What I Used

This is a React/TypeScript application. As stated above, I created the project with create-react-app to save time. I also used SASS for a CSS preprocessor and Axios for HTTP requests.

## What It Does

The app dashboard allows you to add cities from the available list. Once a city is added to the dashboard, you can view the city name, current weather data, and historical weather data on the city card. You can also delete a city from the dashboard (it becomes an available city to add once again) or reorder your cities using the up and down arrow keys on each of the cards.

## How It Could Be Better

Due to time constraints, I was not able to display historical data in a graph or show date-specific historical weather data on hover. The latter was going to be my next task, but I wanted to stick to the time limit given as best as possible. My intended approach would have been really straightforward - line items for each date in the historical weather section of the city card with a simple mouseover event that faded out the date and replaced it with some of the data.

The design is obviously really bad and I sacrificed most of my CSS time for app functionality, so it definitely has a prototype look to it. I knew this would happen since styling was basically my last priority but still bummed I didn't have the time to make it look great!

## Notes On The API

A lot (3) of API calls have to be made to get the data for a single city. First, an initial request has to be made to get the list of available stations with ID. Then, that ID has to be used in two more separate calls - one to get the current weather data and one to get historical weather.

I might have suggested that a user can search and request the name of a city & state to get a single response which included the city name, current weather, and historical weather. If multiple same city state names exist (not the case currently for this endpoint), there may be a need to make it a 2-request process where the first request occurs when a user types the city name, multiple results are returned, and then the second request is made when the user selects one of those results.
