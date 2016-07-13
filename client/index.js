import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import App from './components/App'
import About from './components/About'
import What from './components/What'
import Why from './components/Why'
import How from './components/How'
import Home from './components/Home'
import Encrypt from './components/Encrypt'
import Encrypted from './components/Encrypted'
import Decrypt from './components/Decrypt'
import Decrypted from './components/Decrypted'
import Contact from './components/Contact'

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/about" component={About}>
        <Route path="/what" component={What}/>
        <Route path="/why" component={Why}/>
        <Route path="/how" component={How}/>
      </Route>
      <Route path="/contact" component={Contact}/>
      <Route path="/encrypt" component={Encrypt}>
        <Route path="/encrypted" component={Encrypted}/>
      </Route>
      <Route path="/decrypt" component={Decrypt}>
        <Route path="/decrypted" component={Decrypted}/>
      </Route>
      <Route path="/decrypted" component={Decrypted}/>
    </Route>
  </Router>
), document.getElementById('app'))
console.log('Cryptonite has finished booting up...')
