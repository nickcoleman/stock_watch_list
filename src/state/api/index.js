import axios from 'axios'
import * as keys from './.env.js'
import uuidv4 from 'uuid'

const ALPHA_URL = 'https://www.alphavantage.co/query'
// get a key for free at: https://www.alphavantage.co/support/#api-key
// place key in .env.js file or replace keys.ALPHA_API_KEY below
const ALPHA_API_KEY = keys.ALPHA_API_KEY

export const getStock = symbol =>
  axios
    .get(`${ALPHA_URL}?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${ALPHA_API_KEY}`)
    .then(({ data }) => {
      const globalQuote = data['Global Quote']
      const symbol = globalQuote['01. symbol']
      return {
        [symbol]: {
          uuid: uuidv4(),
          symbol,
          open: parseFloat(globalQuote['02. open']).toFixed(2),
          high: parseFloat(globalQuote['03. high']).toFixed(2),
          low: parseFloat(globalQuote['04. low']).toFixed(2),
          price: parseFloat(globalQuote['05. price']).toFixed(2),
          volume: parseInt(globalQuote['06. volume']),
          lastest_trading_day: globalQuote['07. latest trading day'],
          previous_close: parseFloat(globalQuote['08. previous close']).toFixed(3),
          change: parseFloat(globalQuote['09. change']).toFixed(2),
          change_percent: globalQuote['10. change percent'],
        },
      }
    })

export const quoteSearch = searchTerm =>
  axios
    .get(`${ALPHA_URL}?function=SYMBOL_SEARCH&keywords=${searchTerm}&apikey=${ALPHA_API_KEY}`)
    .then(({ data }) => {
      const bestMatches = data['bestMatches']
      return bestMatches.map(match => {
        return {
          uuid: uuidv4(),
          symbol: match['1. symbol'],
          name: match['2. name'],
        }
      })
    })
