import { combineReducers } from 'redux'

import { PortfolioReducer, QuoteReducer } from './Reducers'

export const AppReducer = combineReducers({
  portfolio: PortfolioReducer,
  quote: QuoteReducer,
})
