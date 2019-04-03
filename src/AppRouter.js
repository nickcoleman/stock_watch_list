import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Portfolio } from './containers'

export const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Portfolio} exact={true} />
    </Switch>
  </BrowserRouter>
)
