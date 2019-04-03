import React from 'react'
import PropTypes from 'prop-types'

import { stylesheet } from './styles'

class RefreshPortfolio extends React.Component {
  static propTypes = {}

  refreshClicked = () => {
    this.props.handleRefreshPorfolio()
  }

  render() {
    return (
      <div {...stylesheet.searchBar}>
        <button onClick={() => this.props.handleRefreshPorfolio()}>Refresh Portfolio</button>
      </div>
    )
  }
}

export default RefreshPortfolio
