import React, { PropTypes } from 'react'
import samples from '../../sample-data'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Message from '../Message'

const ConversationPane = React.createClass({
  propTypes: {
    conversation: PropTypes.array
  },

  renderMsg(value) {
    return (
      <Message
        who={value.who}
        text={value.text}
        key={value.time.getTime()}
      />
    )
  },

  loadConversationData(human) {
    this.setState({ conversation: samples.humans[human].conversations })
  },

  // Handle when user navigates to /conversation/:human
  componentWillMount() {
    this.loadConversationData(this.props.params.human)
  },

  // Handle when user navigates from /conversation/Rami to /conversation/Jeremy
  componentWillReceiveProps(nextProps) {
    this.loadConversationData(nextProps.params.human)
  },

  render() {
    const { conversation } = this.props
    return (
      <div id="conversation-pane">
        <h1>Conversation</h1>
        <h3>{this.props.params.human}</h3>
        <div id="messages">
          {this.state.conversation.map(this.renderMsg)}
        </div>
      </div>
    )
  }
})

export default ConversationPane
