import React from 'react'
import PropTypes from 'prop-types'
import { stylesheet } from './styles'

import { StockCard } from './'

class Portfolio extends React.Component {
  static propTypes = {
    handleDeleteStock: PropTypes.func.isRequired,
    stocks: PropTypes.objectOf(
      PropTypes.shape({
        /* Defined Below */
        uuid: PropTypes.string.isRequired,
      })
    ).isRequired,
  }

  renderPortfolio() {
    const portfolioTable = Object.values(this.props.stocks).map(stock => {
      return (
        <div key={stock.uuid}>
          <StockCard stock={stock} handleDeleteStock={this.props.handleDeleteStock} />
        </div>
      )
    })
    return <div {...stylesheet.portfolio}>{portfolioTable}</div>
  }
  render() {
    if (this.props.loading === {}) {
      return <div>Loading ....</div>
    }
    if (this.props.stocks === {}) return <div>Add a stock to watch</div>
    return this.renderPortfolio()
  }
}

export default Portfolio
