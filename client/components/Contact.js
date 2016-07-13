import React, { Component } from 'react'
import NavLink from './NavLink'

class Contact extends Component {

  render () {
    return (
    	<div className="content">
				<h1>Say Hi!</h1>
				<p>Don't worry I won't bite...</p>
				<form action="">
				<h3>Who are you?:</h3>
				<input type="text" id="firstName" placeholder="First Name"/>
				<input type="text" id="lastName" placeholder="Last Name"/>
				<br/>
				<input type="text" id="email" placeholder="Email"/>
				<h3>Message:</h3>
				<textarea rows="10" id="textInput" placeholder="Enter text here.."></textarea>
				<br/>
				<input type="submit" value="Send!" className="btn btn-success btn-md"/>
				</form>
    	</div>
    )
  }

}


export default Contact