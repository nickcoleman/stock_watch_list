import React from 'react'
import PropTypes from 'prop-types'

import { stylesheet } from './styles'

class RefreshPortfolio extends React.Component {
  static propTypes = {
    handleRefreshPorfolio: PropTypes.func.isRequired,
  }

  refreshClicked = () => {
    this.props.handleRefreshPorfolio()
  }

  render() {
    return (
      <div {...stylesheet.menuBar}>
        <button {...stylesheet.refreshButton} onClick={() => this.props.handleRefreshPorfolio()}>
          Refresh Portfolio
        </button>
      </div>
    )
  }
}

export default RefreshPortfolio
