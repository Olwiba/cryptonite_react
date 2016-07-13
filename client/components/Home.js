import React, { Component } from 'react'
import NavLink from './NavLink'

class Home extends Component {

  shareButton () {
    console.log('you made in here')

    var $this = $('.share');

    $this.animate({
      'width': $this.width() == 304 ? '64px' : '304px'
    }, 300, 'swing');

  }

  render () {
    return (
    	<div className="content">
  				<h1>Welcome to Cryptonite!</h1>
  				<h2>Easily Encrypt and Decrypt messages within seconds...</h2>
          <br/>
          <p>This tool is super easy to use, if this is your first time here I would suggest checking out the instructions found here:</p>
          <NavLink to="/about"><a className="btn btn-info btn-lg"><h4>About</h4></a></NavLink>
          <br/>
          <h3>Share:</h3>
              <ul className="btn-share clearfix">

                <li><a className="button share entypo-share" onClick={this.shareButton.bind(this)}></a></li>
                <li><a href="https://twitter.com/landsurveyorsu" className="button twitter entypo-twitter" target="_blank"></a></li>
                <li><a href="http://www.facebook.com/share.php?u=" className="button facebook entypo-facebook" target="_blank"></a></li>
                <li><a href="https://plus.google.com/u/0/+Landsurveyorsunited/" className="button google entypo-gplus" target="_blank"></a></li>

              </ul>
          <br/>
          <h3>Stay Anonymous</h3>
          <br/>
          <NavLink to="/contact"><a className="btn btn-success btn-block"><h4>Contact Me</h4></a></NavLink>
          <a className="btn btn-warning btn-block"  href="https://github.com/Olwiba/Cryptonite_react/issues"><h4>Found a Bug?</h4></a>
          <br/>
          <p>Copyright | Olwiba 2016</p>
      </div>
    )
  }

}

export default Home