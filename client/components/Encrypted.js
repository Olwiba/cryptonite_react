import React, { Component } from 'react'
import CryptoJS from 'crypto-js'

class Encrypted extends Component {

  sendButton () {
    let button = $('.share')
    button.animate({
      'width': button.width() == 304 ? '64px' : '304px'
    }, 300, 'swing');
  }

  render () {
    return (
      <div className="top-bar">
				<h1>Encrypted Message</h1>
        <h2>I encrypted your message for you!</h2>
        <h3>Message:</h3>
        <a className="btn btn-dark btn-lg">Copy</a><br/>
        <textarea rows="10" id="encryptedMessage" >{this.props.encryption.myEncryption}</textarea>
        <h2>Settings for decryption:</h2>
        <div className="row">
          <div className="col-md-3 align-right"><h3>Hash Type:</h3></div>
          <div className="col-md-3 align-left"><h3 className="makeGreen">{this.props.encryption.hash}</h3></div>
          <div className="col-md-3 align-right"><h3>Method:</h3></div>
          <div className="col-md-3 align-left"><h3 className="makeGreen">{this.props.encryption.method}</h3></div>
        </div>
        <h3>Your Hash:</h3>
        <p>Use this if you want to validate the decryption</p>
        <a className="btn btn-dark btn-lg">Copy</a><br/>
        <textarea rows="2" id="encryptedMessage">{this.props.encryption.myHash}</textarea>
        <h3>Secret Pass Phrase:</h3>
        <a className="btn btn-dark btn-lg">Copy</a><br/>
        <textarea rows="5" id="encryptedMessage">{this.props.encryption.key}</textarea>
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

export default Encrypted