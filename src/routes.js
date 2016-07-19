import React from 'react'
import ReactDOM from 'react-dom'
import { browserHistory, Route, Router } from 'react-router'

import App from './components/App'
import ConversationPane from './components/ConversationPane'

const el = document.getElementById('main')

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/conversation/:human" component={ConversationPane} />
    </Route>
  </Router>
  , el
)
