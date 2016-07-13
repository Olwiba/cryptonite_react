import React, { Component } from 'react'
import Encrypter from 'encrypter'

class Encrypt extends Component {

	encryptText (text) {
		// const encrypted = Encrypter.encrypt(text)
		console.log('Encrypted file: ')
	}

  render () {
    return (
    	<div>
				<h1>Encrypted Message</h1>
    	</div>
    )
  }

}


export default Encrypt