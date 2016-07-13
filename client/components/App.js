import React, { Component } from 'react'
import NavLink from './NavLink'
import GithubCorner from 'react-github-corner'

class App extends Component {

  render () {
    return (
    	<div>
      	<ul role="nav" className="navigation">
          <NavLink to="/" onlyActiveOnIndex={true}><a className="btn btn-dark btn-lg home-btn"><img src="/resources/images/home.png" alt="Home" className="home"/></a></NavLink>
          <NavLink to="/encrypt"><a className="btn btn-dark btn-lg btn-wide">Encrypt</a></NavLink>
          <NavLink to="/decrypt"><a className="btn btn-dark btn-lg btn-wide">Decrypt</a></NavLink>
          <NavLink to="/about"><a className="btn btn-dark btn-lg info-btn"><img src="/resources/images/info.png" alt="About" className="info"/></a></NavLink>
        </ul>
        <GithubCorner href="https://github.com/Olwiba/cryptonite_react" direction="left" bannerColor="rgba(4, 176, 3, 0.9)" />
        {this.props.children}
    	</div>
    )
  }

}

export default App