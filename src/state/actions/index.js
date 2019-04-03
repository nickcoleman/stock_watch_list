import * as types from '../types'

export const portfolioLoading = () => ({
  type: types.PORTFOLIO_LOADING,
  payload: {
    loading: true,
  },
})

export const portfolioError = error => ({
  type: types.PORTFOLIO_ERROR,
  payload: {
    loading: false,
    error,
  },
})

export const updatePortfolio = stocks => ({
  type: types.UPDATE_PORTFOLIO,
  payload: {
    loading: false,
    stocks,
  },
})

export const addStockToPortfolio = stock => ({
  type: types.ADD_STOCK_TO_PORTFOLIO,
  payload: {
    loading: false,
    stock,
  },
})

export const quoteError = error => ({
  type: types.QUOTE_ERROR,
  payload: {
    loading: false,
    error,
  },
})

export const quoteSearch = keywords => ({
  type: types.QUOTE_SEARCH,
  payload: {
    loading: false,
    keywords,
  },
})
