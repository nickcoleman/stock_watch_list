/*
 * Manages flow for api calls with associated actions
 */

// TODO: Use axios cancelToken to cancel api request if another one comes in

import * as actions from '../actions'
import * as api from '../api'

export const updatePortfolio = stocks => dispatch => {
  try {
    dispatch(actions.updatePortfolio(stocks))
  } catch (error) {
    dispatch(actions.portfolioError(error))
  }
}

export const refreshPortfolio = symbols => async dispatch => {
  dispatch(actions.portfolioLoading())
  try {
    let stocks = {}

    for (const symbol of symbols) {
      const stock = await api.getStock(symbol)
      stocks = { ...stocks, ...stock }
    }
    console.log('xxx stocks', stocks)
    dispatch(actions.updatePortfolio(stocks))
  } catch (error) {
    dispatch(actions.portfolioError(error))
  }
}

export const quoteSearch = searchTerm => async dispatch => {
  try {
    const keywords = await api.quoteSearch(searchTerm)
    dispatch(actions.quoteSearch(keywords))
  } catch (error) {
    dispatch(actions.quoteError(error))
  }
}

export const addStock = symbol => async dispatch => {
  dispatch(actions.portfolioLoading())
  try {
    const stock = await api.getStock(symbol)
    dispatch(actions.addStockToPortfolio(stock))
  } catch (error) {
    dispatch(actions.portfolioError(error))
  }
}
