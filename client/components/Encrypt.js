import React, { Component } from 'react'
import CryptoJS from 'crypto-js'
import NavLink from './NavLink'
import Encrypted from './Encrypted'


class Encrypt extends Component {

	 constructor (props) {
    super(props)

    this.state = {
    	displayMessage: false,
    	encryption: {
	      hash: 'SHA256',
	      method: 'AES',
	      message: '',
	      key: '',
	      myHash: '',
	      myEncryption: ''
	    }
    }
  }

  hashChange = (e) => {
		let encryption = this.state.encryption
  	let formattedHash = e.target.value.split('-')
		formattedHash[0] = formattedHash[0].toUpperCase()
		formattedHash = formattedHash.join('')

  	encryption.hash = formattedHash
  	console.log('You changed the hash! ~\(o.o)/~ Hash: ', encryption.hash)
		this.setState({encryption: encryption})
  }

  methodChange = (e) => {
  	let encryption = this.state.encryption
  	encryption.method = e.target.value
  	console.log('You changed the Method! ~\(o.o)/~ Method:', encryption.method)
		this.setState({encryption: encryption})
  }

  textChange = (e) => {
   	let encryption = this.state.encryption
  	encryption.message = e.target.value
  	console.log('Message:', encryption.message)
		this.setState({encryption: encryption})
  }

  keyChange = (e) => {
  	let encryption = this.state.encryption
  	encryption.key = e.target.value
  	console.log('Key:', encryption.key)
		this.setState({encryption: encryption})
	}




	encryptText = () => {
		let hash = this.state.encryption.hash
		let method = this.state.encryption.method
		let message = this.state.encryption.message
		let key = this.state.encryption.key
		let encryption = this.state.encryption
		
		console.log('This is the encryption Hash: ', this.state.encryption.hash)
		console.log('This is the encryption Method: ', this.state.encryption.method)
		console.log('This is the encryption Key: ', this.state.encryption.key)

		encryption.myHash = CryptoJS[hash](message).toString()
		encryption.myEncryption = CryptoJS[method].encrypt(message, key)
		encryption.myEncryption = encryption.myEncryption.toString()

		console.log('This is the encrypted Text: ', encryption.myEncryption)

		this.setState({displayMessage: true, encryption: encryption})
	}

  render () {
    return (
    	<div className="content">
				<h1>Encrypt Message</h1>
				<h2>Easily encrypt any message!</h2>
				<h3>1. Select Encyption Options</h3>
				<div className="row">
					<div className="col-md-1"></div>
					<div className="col-md-5">
						<label for="hash" className="dropdownTitle">Select Hash Type</label><br/>
						<select className="dropdown" name="hash" id="hash" onChange={this.hashChange}>
						  <option className="dropdownOpt">Sha-256</option>
						  <option className="dropdownOpt">MD5</option>
						  <option className="dropdownOpt">Sha-1</option>
						  <option className="dropdownOpt">Sha-224</option>
						  <option className="dropdownOpt">Sha-512</option>
						  <option className="dropdownOpt">Sha-384</option>
						  <option className="dropdownOpt">Sha-3</option>
						  <option className="dropdownOpt">Ripemd-160</option>
						</select>
					</div>
					<div className="col-md-5">
						<label for="method" className="dropdownTitle">Select Encryption Method</label><br/>
						<select className="dropdown" name="method" id="method" onChange={this.methodChange}>
						  <option className="dropdownOpt">AES</option>
						  <option className="dropdownOpt">DES</option>
						  <option className="dropdownOpt">TripleDES</option>
						  <option className="dropdownOpt">Rabbit</option>
						  <option className="dropdownOpt">RC4</option>
						</select>
					</div>
					<div className="col-md-1"></div>
				</div>
					<h3>2. Enter Message to be Encrypted</h3>
					<textarea rows="10" id="textInput" placeholder="Enter message here.." onChange={this.textChange}></textarea>
					<h3>3. Enter your Secret Pass Phrase</h3>
					<textarea rows="10" id="keyInput" name="keyInput" placeholder="Enter pass phrase here.." onChange={this.keyChange}></textarea><br/>
          <NavLink to="/encrypted"><a onClick={this.encryptText} className="btn btn-success btn-lg margin-bottom margin-top"><h4>Cryptonify!</h4></a></NavLink>
          {this.state.displayMessage ? <Encrypted encryption={this.state.encryption} /> : <div></div>} 
    	</div>
    )
  }

}


export default Encrypt