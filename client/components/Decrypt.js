import React, { Component } from 'react'
import CryptoJS from 'crypto-js'
import NavLink from './NavLink'
import Decrypted from './Decrypted'


class Decrypt extends Component {

	 constructor (props) {
    super(props)

    this.state = {
    	displayMessage: false,
    	hashCheck: './resources/images/warning.png',
    	decryption: {
	      hash: 'SHA256',
	      method: 'AES',
	      myHash: '',
	      checkHash: '',
	      myDecryption: '',
	      message: '',
	      key: ''
	    }
    }
  }

  hashChange = (e) => {
		let decryption = this.state.decryption
  	let formattedHash = e.target.value.split('-')
		formattedHash[0] = formattedHash[0].toUpperCase()
		formattedHash = formattedHash.join('')

  	decryption.hash = formattedHash
  	console.log('You changed the hash! ~\(o.o)/~ Hash: ', decryption.hash)
		this.setState({decryption: decryption})
  }

  methodChange = (e) => {
  	let decryption = this.state.decryption
  	decryption.method = e.target.value
  	console.log('You changed the Method! ~\(o.o)/~ Method:', decryption.method)
		this.setState({decryption: decryption})
  }

  textChange = (e) => {
   	let decryption = this.state.decryption
  	decryption.message = e.target.value
  	console.log('Message:', decryption.message)
		this.setState({decryption: decryption})
  }

  keyChange = (e) => {
  	let decryption = this.state.decryption
  	decryption.key = e.target.value
  	console.log('Key:', decryption.key)
		this.setState({decryption: decryption})
	}

	myHashChange = (e) => {
  	let decryption = this.state.decryption
  	decryption.myHash = e.target.value
  	console.log('My Hash:', decryption.myHash)
		this.setState({decryption: decryption})
	}

	validate = () => {
		const myHash = this.state.decryption.myHash
		const checkHash = this.state.decryption.checkHash
		let decryption = this.state.decryption

		myHash === checkHash ?	
			decryption.hashCheck = './resources/images/success.png'
		:	decryption.hashCheck = './resources/images/warning.png'
			
		this.setState({hashCheck: decryption.hashCheck})
			
	}


	decryptText = () => {
		let hash = this.state.decryption.hash
		let method = this.state.decryption.method
		let message = this.state.decryption.message
		let key = this.state.decryption.key
		let myHash = this.state.decryption.myHash
		let decryption = this.state.decryption
		
		console.log('This is the decryption Hash: ', this.state.decryption.hash)
		console.log('This is the decryption Hash: ', this.state.decryption.myHash)
		console.log('This is the decryption Method: ', this.state.decryption.method)
		console.log('This is the decryption Key: ', this.state.decryption.key)

		decryption.myDecryption = CryptoJS[method].decrypt(message, key)
		decryption.myDecryption = decryption.myDecryption.toString(CryptoJS.enc.Utf8)
		decryption.checkHash = CryptoJS[hash](decryption.myDecryption).toString()


		this.validate()
		this.setState({displayMessage: true, decryption: decryption})
	}

  render () {
    return (
    	<div className="content">
				<h1>Decrypt Message</h1>
				<h2>Easily decrypt any message!</h2>
				<h3>1. Select Decryption Options</h3>
				<div className="row">
					<div className="col-md-1"></div>
					<div className="col-md-5">
						<label for="hash" className="dropdownTitle">Select Hash Type</label><br/>
						<select className="dropdown" name="hash" onChange={this.hashChange}>
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
						<select className="dropdown" name="method" onChange={this.methodChange}>
						  <option className="dropdownOpt">AES</option>
						  <option className="dropdownOpt">DES</option>
						  <option className="dropdownOpt">TripleDES</option>
						  <option className="dropdownOpt">Rabbit</option>
						  <option className="dropdownOpt">RC4</option>
						</select>
					</div>
					<div className="col-md-1"></div>
				</div>
				<h4>Hash:</h4>
					<textarea rows="2" placeholder="Optional - You can leave me blank.." onChange={this.myHashChange}></textarea>
				<h3>2. Enter the Encrypted message</h3>
					<textarea rows="10" placeholder="Enter message here.." onChange={this.textChange}></textarea>
				<h3>3. Enter Secret Pass Phrase</h3>
					<textarea rows="5" placeholder="Enter pass phrase here.." onChange={this.keyChange}></textarea><br/>
        <NavLink to="/decrypted"><a onClick={this.decryptText} className="btn btn-success btn-lg margin-bottom margin-top"><h4>Decrypt!</h4></a></NavLink>
        {this.state.displayMessage ? <Decrypted decryption={this.state.decryption} hashCheck={this.state.hashCheck} /> : <div></div>} 
    	</div>
    )
  }

}


export default Decrypt