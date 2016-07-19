import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import InboxItem from '../InboxItem'

const InboxPane = React.createClass({
  propTypes: {
    humans: PropTypes.object.isRequired
  },

  renderInboxItem(human) {
    const { humans } = this.props
    return (
      <InboxItem
        key={human}
        name={human}
        details={humans[human]}
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

export default InboxPane
