import React, { PropTypes } from 'react'

const StorePane = React.createClass({
  propTypes: {
    stores: PropTypes.object
  },

  renderStore(store) {
    return <Store
      key={store}
      store={store}
      details={this.props.stores[store]}
    />
  },

  render() {
    const { stores } = this.props
    return (
      <div id="stores-pane">
        <h1>Stores & Objects</h1>
        <ul>
          {Object.keys(stores).map(this.renderStore)}
        </ul>
      </div>
    )
  }
})

const Store = React.createClass({
  propTypes: {
    store: PropTypes.string,
    details: PropTypes.object
  },

  // get number of orders that are either delivered, in the oven or confirmed
  getCount(status) {
    return this.props.details.orders.filter((order) => order.status === status).length
  },

  render() {
    const { store, orders } = this.props
    return (
      <li>
        <p>{store}</p>
        <p>Orders confirmed: {this.getCount("Confirmed")}</p>
        <p>Orders in the oven: {this.getCount("In The Oven")}</p>
        <p>Orders delivered: {this.getCount("Delivered")}</p>
      </li>
    )
  }
})

export default StorePane
