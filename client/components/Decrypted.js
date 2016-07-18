import React, { Component } from 'react'
import CryptoJS from 'crypto-js'

class Decrypted extends Component {

  sendButton () {
    let button = $('.share')
    button.animate({
      'width': button.width() == 304 ? '64px' : '304px'
    }, 300, 'swing');
  }

  render () {
    return (
      <div className="top-bar">
				<h1>Decrypted Message</h1>
        <h2>I decrypted your message for you!</h2>
        <h3>Message:</h3>
        <textarea rows="10" id="encryptedMessage" >{this.props.decryption.myDecryption}</textarea>
        <div className="row">
	        <div className="col-md-2"> </div>
	        <div className="col-md-3 align-right">
	        	<h4>Hash Check:</h4>
	        </div>
	        <div className="col-md-3 align-left">
	        	<img src={this.props.hashCheck} />
	        </div>
	        <div className="col-md-3">
		        <a className="btn btn-dark btn-lg">Copy</a>
	        </div>
	        <div className="col-md-1"></div>
        </div><br/>
        <br/>
        <ul className="btn-share clearfix padding">
          <li><a className="button share entypo-mail" onClick={this.sendButton.bind(this)}></a></li>
          <li><a href="https://twitter.com/landsurveyorsu" className="button twitter entypo-twitter" target="_blank"></a></li>
          <li><a href="http://www.facebook.com/share.php?u=" className="button facebook entypo-facebook" target="_blank"></a></li>
          <li><a href="https://plus.google.com/u/0/+Landsurveyorsunited/" className="button google entypo-gplus" target="_blank"></a></li>
        </ul>
        <br/>
      </div>
    )
  }

}

export default Decrypted