import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import * as operations from '../state/operations'

import { Header, Portfolio, RefreshPortfolio, Search } from '../components'

class PortfolioContainer extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    stocks: PropTypes.objectOf(PropTypes.shape(/* Defined Below */)),
    keywords: PropTypes.arrayOf(PropTypes.shape(/* Defined Below */)),
  }

  deleteStock = symbol => {
    const { stocks } = this.props
    const updatedPortfolio = Object.keys(this.props.stocks)
      .filter(key => key !== symbol)
      .reduce((obj, key) => {
        obj[key] = stocks[key]
        return obj
      }, {})
    this.props.dispatch(operations.updatePortfolio(updatedPortfolio))
  }

  searchStocks = searchTerm => {
    this.props.dispatch(operations.quoteSearch(searchTerm))
  }

  addStock = symbol => {
    this.props.dispatch(operations.addStock(symbol))
  }

  refreshPortfolio = () => {
    const symbols = Object.values(this.props.stocks).map(stock => stock.symbol)
    this.props.dispatch(operations.refreshPortfolio(symbols))
  }

  render() {
    return (
      <Fragment>
        <Header />
        <Search
          keywords={this.props.keywords}
          handleSearchStocks={this.searchStocks}
          handleAddStock={this.addStock}
        />
        <RefreshPortfolio handleRefreshPorfolio={this.refreshPortfolio} />
        <Portfolio {...this.props} handleDeleteStock={this.deleteStock} />
      </Fragment>
    )
  }
}

const mapStateToProps = ({ portfolio, quote }) => ({
  loading: portfolio.loading,
  stocks: portfolio.stocks,
  keywords: quote.keywords,
})

export default connect(mapStateToProps)(PortfolioContainer)
