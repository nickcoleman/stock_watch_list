import React from 'react'
import PropTypes from 'prop-types'
import { stylesheet } from './styles'

class Search extends React.Component {
  static propTypes = {
    handleSearchStocks: PropTypes.func.isRequired,
    handleAddStock: PropTypes.func.isRequired,
    keywords: PropTypes.arrayOf(
      PropTypes.shape({
        uuid: PropTypes.string.isRequired,
        symbol: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      }).isRequired
    ),
  }
  state = {
    value: '',
  }

  setSearchTerm = event => {
    event.preventDefault()
    const { value } = event.target
    this.setState({ value })
    this.props.handleSearchStocks(value)
  }

  getStock = event => {
    const { value } = event.target
    if (value !== '') {
      this.props.handleAddStock(event.target.value)
      this.setState({ value: '' })
    }
  }

  renderOptions = () => {
    const { keywords } = this.props
    const optionItems = [
      <option key="option-message" value="">
        Stock Choices
      </option>,
    ]
    const optionKeywords = keywords.map(keyword => (
      <option key={keyword.uuid} value={keyword.symbol}>
        {keyword.symbol}: {keyword.name}
      </option>
    ))
    return (
      <select onChange={this.getStock} {...stylesheet.searchSelection}>
        {optionItems.concat(optionKeywords)}
      </select>
    )
  }

  render() {
    return (
      <div {...stylesheet.searchBar}>
        <div {...stylesheet.search}>
          <input
            {...stylesheet.searchInput}
            type="text"
            placeholder="Stock Symbol - Name"
            value={this.state.value}
            onChange={this.setSearchTerm}
          />
          {this.renderOptions()}
        </div>
      </div>
    )
  }
}

export default Search
