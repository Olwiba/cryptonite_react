import React, { Component } from 'react'

class Decrypt extends Component {

  render () {
    return (
    	<div>
				<h1>Decrypt Message</h1>
				<h2>Easily decrypt any message!</h2>
				<p>Just follow the steps to decrypt any message in no time!</p>
				<form action="/decrypt" method="post" >
					<h3>1. Enter the text you wish to be decrypted</h3>
					<textarea rows="10" cols="50" name="textInput" placeholder="Enter text here.."></textarea>
					<h3>2. Enter your secret pass phrase</h3>
					<p>(Enter the secret key from the sender.)</p>
					<textarea rows="10" cols="50" name="keyInput" placeholder="Enter text here.."></textarea>
					<h3>3. Click the button and I will decrypt your message for you :~)</h3>
					<button type="submit">Decryptonify!</button>
				</form>
				<p>Github: <a href="www.github.com/olwiba/cryptonite">Olwiba</a></p>
    	</div>
    )
  }

}

export default Decrypt