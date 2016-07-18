import React, { PropTypes } from 'react'

const InboxPane = React.createClass({
  propTypes: {
    humans: PropTypes.object.isRequired,
    selectedConversation: PropTypes.func
  },

  renderInboxItem(human) {
    const { humans, selectedConversation } = this.props
    return (
      <InboxItem
        key={human}
        name={human}
        details={humans[human]}
        selectedConversation={selectedConversation}
      />
    )
  },

  render() {
    const { humans } = this.props
    return (
      <div id="inbox-pane">
        <h1>Inbox</h1>
        <table>
          <thead>
            <tr>
              <th>Chat received</th>
              <th>Name</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(humans).map(this.renderInboxItem)}
          </tbody>
        </table>
      </div>
    )
  }
})

const InboxItem = React.createClass({
  propTypes: {
    details: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    selectedConversation: PropTypes.func
  },

  sortByDate(a,b) {
    if (a.time === b.time) return 0
    if (a.time > b.time) return -1
    if (a.time < b.time) return 1
  },

  // show only the last message
  messageSummary(conversations) {
    const lastMsg = conversations.sort(this.sortByDate)[0]
    return lastMsg.who + ' said: ' + lastMsg.text + ' @ ' + lastMsg.time.toDateString()
  },

  // click event handler
  setSelected(e) {
    e.preventDefault()
    this.props.selectedConversation(this.props.name)
  },

  render() {
    const { details, name } = this.props
    return (
      <tr>
        <td>
          <a href="" onClick={this.setSelected}>
            {this.messageSummary(details.conversations)}
          </a>
        </td>
        <td>{name}</td>
        <td>{details.orders.sort(this.sortByDate)[0].status}</td>
      </tr>
    )
  }
})

export default InboxPane
