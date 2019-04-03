import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

import { store } from "./state/store/AppStore"
import { AppRouter } from "./AppRouter"
import "./index.css"

ReactDOM.render(
  <Provider store={store()}>
    <AppRouter />
  </Provider>,
  document.getElementById("root")
)
