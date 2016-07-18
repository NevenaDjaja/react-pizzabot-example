import React from 'react'
import ReactDOM from 'react-dom'
import samples from './sample-data'
import InboxPane from './InboxPane'
import ConversationPane from './ConversationPane'
import StorePane from './StorePane'

const App = React.createClass({
  getInitialState() {
    return {
      "humans": {},
      "stores": {},
      "selectedConversation": []
    }
  },
  loadSampleData(e) {
    this.setState(samples)
  },

  setSelectedConversation(name) {
    this.setState({
      selectedConversation: this.state.humans[name].conversations
    })
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
              selectedConversation={this.setSelectedConversation}
            />
          </div>
          <div className="column">
            <ConversationPane
              conversation={this.state.selectedConversation}
            />
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

const el = document.getElementById('main')

ReactDOM.render(<App />, el)
