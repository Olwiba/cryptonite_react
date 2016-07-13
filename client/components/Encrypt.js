import React, { Component } from 'react'
import Encrypter from 'encrypter'
import NavLink from './NavLink'

class Encrypt extends Component {

	encryptText = (text) => {
		// const encrypted = Encrypter.encrypt(text)
		console.log('Encrypt funciton is allgood!')
		document.getElementById('textInput').value = 'text has been entered'
	}

  render () {
    return (
    	<div>
				<h1>Encrypt Message</h1>
				<h2>Easily encrypt any message!</h2>
				<p>Just follow the steps and start sending encrypted messages is not time!</p>
					<h3>1. Enter the text you wish to be encrypted</h3>
					<textarea rows="10" cols="50" id="textInput" placeholder="Enter text here.."></textarea>
					<h3>2. Enter your secret pass phrase</h3>
					<p>(This can be anything! give this to the recipient so they can read you message.</p>
					<textarea rows="10" cols="50" name="keyInput" placeholder="Enter text here.."></textarea>
					<h3>3. Click the button any you message and I will encrypt your message for you :~)</h3>
          <button><NavLink to="/encrypted">Cryptonify!</NavLink></button>
          <button onClick={this.encryptText}>Click Me!</button>
				<p>Github: <a href="www.github.com/olwiba/cryptonite">Olwiba</a></p>
    	</div>
    )
  }

}


export default Encrypt