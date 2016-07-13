import React, { Component } from 'react'
import NavLink from './NavLink'


class About extends Component {

  render () {
    return (
    	<div className="content">
				<h1>About</h1>
				<h3>What would you like to know?</h3>
        <NavLink to="/what"><a className="btn btn-success btn-lg">What is Cryptonite</a></NavLink>
        <NavLink to="/how"><a className="btn btn-success btn-lg">How to use me</a></NavLink>
        <NavLink to="/why"><a className="btn btn-success btn-lg">Why use this tool</a></NavLink>
        {this.props.children}
        <h3>____(o^^)o_____(^-^*)____</h3>
    	</div>
    )
  }

}

export default About