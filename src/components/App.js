import React from 'react'
import ReactDOM from 'react-dom'
import samples from '../sample-data'
import InboxPane from './InboxPane'
import StorePane from './StorePane'

import '../main.css'

const App = React.createClass({
  getInitialState() {
    return {
      "humans": {},
      "stores": {},
    }
  },

  componentWillMount() {
    if ('human' in this.props.params) {
      this.loadSampleData()
    }
  },

  loadSampleData() {
    this.setState(samples)
  },

  render() {
    return (
      <div>
        <header>Welcome to a little bot!</header>
        <button onClick={this.loadSampleData}>Load data</button>
        <div className="container">
          <div className="column">
            <InboxPane
              humans={this.state.humans}
            />
          </div>
          <div className="column">
            {this.props.children || "Select a conversation from the Inbox"}
          </div>
          <div className="column">
            <StorePane
              stores={this.state.stores}
            />
          </div>
        </div>
      </div>
    )
  }
})

export default App
