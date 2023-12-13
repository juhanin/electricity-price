# Electricity Price

Small service that displays the electricity price of current 48 hours "slot" (includes prediction for some future hours
depending when the service is called).

## Getting Started

### Prerequisites / Built With

Make sure that you meet the following version requirements:

- node v20.3.0
- npm 9.6.7

Some notable libraries that were used in development:

- parcel 2.10.3
- react 18.2.0
- react-dom 18.2.0
- react-chartkick 0.5.3
- chart.js 4.4.1

For the Express server part:

- express 4.18.2
- cors 2.8.5

## Usage

First, make sure that your node and npm versions are at least on the level listed in the above prerequisites. Installing
should be as simple as:

`npm install`

You should also run `npm install` inside the `server` directory. After that, you can start the Express server (while inside
`server` directory) with:

`node server.js`

Once the server is running, start the development frontend client with a different shell in the root directory of the project:

`npm run dev`

You should be able to go to `http://localhost:1234` now with your browser and there should a visible line chart with the
electricity prices of 48 hours timeslot. Note that the hours visible don't only include the current price and some history
prices, they also include prediction for the next coming hours.

## Roadmap

- Think of a data source for more history (use existing solution every 48 hours and push to a database? Crawl prices from some other service?)
- Add some testing, even though there's very little business logic of our own here currently