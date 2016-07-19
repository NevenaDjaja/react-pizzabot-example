import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import PureRenderMixin from 'react-addons-pure-render-mixin'

const InboxItem = React.createClass({
  mixins: [PureRenderMixin],

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

  render() {
    const { details, name } = this.props
    return (
      <tr>
        <td>
          <Link to={'/conversation/' + encodeURIComponent(name)}>
            {this.messageSummary(details.conversations)}
          </Link>
        </td>
        <td>{name}</td>
        <td>{details.orders.sort(this.sortByDate)[0].status}</td>
      </tr>
    )
  }
})

export default InboxItem
