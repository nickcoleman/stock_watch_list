import { compose, createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"

import { AppReducer } from "../reducers/AppReducer"

const middleware = [thunk]

// TODO: Remove Redux tools for production
export const store = () =>
  createStore(
    AppReducer,
    undefined,
    compose(
      applyMiddleware(...middleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  )
