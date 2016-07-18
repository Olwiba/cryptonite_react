import React, { Component } from 'react'

class How extends Component {

  render () {
    return (
    	<div>
				<h3>How to use me:</h3>
				<h3>Encrypt</h3>
					<p>1. Select the Encrypt tab</p>
					<p>2. Select the Hash type + Encryption method</p>
					<p>3. Enter your message</p>
					<p>4. Enter a secret pass phrase</p>
					<p>5. Cryptonify!</p>
				<h3>Decrypt</h3>
					<p>1. Select the Decrypt tab</p>
					<p>2. Select the Decryption method</p>
					<p>3. Enter the Hash type + Hash key (optional)</p>
					<p>4. Enter the enctypted message</p>
					<p>5. Enter the secret pass phrase</p>
					<p>6. Decrypt!</p>
    	</div>
    )
  }

}


export default How