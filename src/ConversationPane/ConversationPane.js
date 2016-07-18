import React, { PropTypes } from 'react'

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

  render() {
    const { conversation } = this.props
    return (
      <div id="conversation-pane">
        <h1>Conversation</h1>
        <h3>Select the conversation from the Inbox</h3>
        <div id="messages">
          {conversation.map(this.renderMsg)}
        </div>
      </div>
    )
  }
})

const Message = React.createClass({
  propTypes: {
    who: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  },

  render() {
    const { who, text } = this.props
    return (
      <p className={who}>
        <span>{who}: </span>
        <span>{text}</span>
      </p>
    )
  }
})

export default ConversationPane
