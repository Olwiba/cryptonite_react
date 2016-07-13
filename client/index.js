import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import App from './components/App'
import About from './components/About'
import Home from './components/Home'
import Encrypt from './components/Encrypt'
import Encrypted from './components/Encrypted'
import Decrypt from './components/Decrypt'
import Decrypted from './components/Decrypted'

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    	<IndexRoute component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/encrypt" component={Encrypt}/>
      <Route path="/encrypted" component={Encrypted}/>
      <Route path="/decrypt" component={Decrypt}/>
      <Route path="/decrypted" component={Decrypted}/>
    </Route>
  </Router>
), document.getElementById('app'))
console.log('Cryptonite has finished booting up...')
