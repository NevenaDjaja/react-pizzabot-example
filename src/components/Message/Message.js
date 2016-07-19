import React, { PropTypes } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

const Message = React.createClass({
  mixins: [PureRenderMixin],

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

export default Message
