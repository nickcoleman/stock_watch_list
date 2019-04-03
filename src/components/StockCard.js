import React from 'react'
import PropTypes from 'prop-types'

import { stylesheet } from './styles'

class StockCard extends React.Component {
  static propTypes = {
    handleDeleteStock: PropTypes.func.isRequired,
    stock: PropTypes.shape({
      change: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      symbol: PropTypes.string.isRequired,
      uuid: PropTypes.string,
    }),
  }
  render() {
    const { stock } = this.props
    return (
      <div {...stylesheet.stockCard}>
        <div {...stylesheet.symbol}>{stock.symbol}</div>
        <div {...stylesheet.price}>Price: {stock.price}</div>
        <div {...stylesheet.change}>Change: {stock.change}</div>
        <div
          {...stylesheet.deleteStockButton}
          onClick={() => this.props.handleDeleteStock(stock.symbol)}
        >
          Delete
        </div>
      </div>
    )
  }
}

export default StockCard
