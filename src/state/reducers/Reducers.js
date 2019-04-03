import * as types from '../types'
import uuidv4 from 'uuid'

const initialState = {
  quote: {
    loading: true,
    error: '',
    keywords: [],
    stock: {},
  },
  portfolio: {
    loading: true,
    error: '',
    stocks: {
      MSFT: {
        uuid: uuidv4(),
        symbol: 'MSFT',
        open: '119.06',
        high: '119.29',
        low: '118.52',
        price: '119.27',
        volumn: '810348',
        latestTradingDay: '2019-04-02',
        previousClose: '119.02',
        change: '0.25',
        changePercent: '0.2141%',
      },
      // IBM: {
      //   uuid: uuidv4(),
      //   symbol: 'IBM',
      //   open: 143.35,
      //   high: 145.95,
      //   low: 142.6,
      //   price: 143.05,
      //   volumn: 1223567,
      //   latestTradingDay: '2019-04-02',
      //   previousClose: 143.3,
      //   change: -0.25,
      //   changePercent: '-0.1745%',
      // },
      // AAPL: {
      //   uuid: uuidv4(),
      //   symbol: 'AAPL',
      //   open: 143.35,
      //   high: 145.95,
      //   low: 142.6,
      //   price: 143.05,
      //   volumn: 1223567,
      //   latestTradingDay: '2019-04-02',
      //   previousClose: 143.3,
      //   change: -0.25,
      //   changePercent: '-0.1745%',
      // },
      // NVDA: {
      //   uuid: uuidv4(),
      //   symbol: 'NVDA',
      //   open: 143.35,
      //   high: 145.95,
      //   low: 142.6,
      //   price: 143.05,
      //   volumn: 1223567,
      //   latestTradingDay: '2019-04-02',
      //   previousClose: 143.3,
      //   change: -0.25,
      //   changePercent: '-0.1745%',
      // },
    },
  },
}

export const PortfolioReducer = (state = initialState.portfolio, action) => {
  const { payload, type } = action
  switch (type) {
    case types.PORTFOLIO_LOADING:
    case types.PORTFOLIO_ERROR:
    case types.GET_PORTFOLIO_COMPLETE:
    case types.UPDATE_PORTFOLIO:
      return { ...state, ...payload }
    case types.ADD_STOCK_TO_PORTFOLIO:
      return {
        ...state,
        stocks: { ...state.stocks, ...payload.stock },
        loading: payload.loading,
      }
    default:
      return state
  }
}

export const QuoteReducer = (state = initialState.quote, action) => {
  const { payload, type } = action
  switch (type) {
    case types.QUOTE_LOADING:
    case types.QUOTE_ERROR:
    case types.QUOTE_SEARCH:
      return { ...state, ...payload }
    default:
      return state
  }
}
