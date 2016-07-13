import React, { Component } from 'react'
import NavLink from './NavLink'

class App extends Component {

  render () {
    return (
    	<div>
      	<ul role="nav">
          <button><NavLink to="/">Home</NavLink></button>
          <button><NavLink to="/about">About</NavLink></button>
          <button><NavLink to="/encrypt">Encrypt</NavLink></button>
          <button><NavLink to="/decrypt">Decrypt</NavLink></button>
        </ul>
        {this.props.children}
    	</div>
    )
  }

}

export default App