import React, { Component } from 'react'

import 'css-modules-css-reset'
import styles from 'base.css'

import { Router } from '@reach/router';
import {
  Landing,
  About,
  Community,
  IndividualImpact
} from 'pages'

import ReactDOM from 'react-dom'
import registerServiceWorker from 'utilities/registerServiceWorker'

class App extends Component {
  render() {
    return (
      <div className={ styles.root }>
        <Router>
          <Landing path='/' />
          <About path='/about' />
          <Community path='/community' />
          <IndividualImpact path='/individual-impact' />
        </Router>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()