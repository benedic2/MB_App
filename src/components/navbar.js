import React, {Component} from 'react';
import { Link } from 'react-router';
import emailPic from '../../resource/email.jpg';
import twitter from '../../resource/twitter.png';
import facebook from '../../resource/facebook.ico';
import linkedin from '../../resource/Linkedin.ico';

export default class NavBar extends Component {
    
    render (){
    return (
        
<nav className="navbar navbar-default navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand" href="#">Home</a>
    </div>

/*Left side navbar*/
    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav navbar-right">

                    <li>
                        <a href="mailto:benedic2@outlook.com?Subject=Resume%20interest" target="_top">
                            <img src={emailPic} className="smedia"></img>
                        </a>
                    </li>
                    <li>
                        <a target="_blank" href="https://www.linkedin.com/in/michael-benedict-51a9aa69/">
                            <img src={linkedin} className="smedia"></img>
                        </a>
                    </li>
                    
                    <li>
                        <a target="_blank" href="https://twitter.com/mbengineer" class="twitter-follow-button" data-size="large" data-show-screen-name="false" data-show-count="false">
                            <img src={twitter} className="smedia"></img>
                        </a>
                        <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
                    </li>
                    <li>    
                        <a target="_blank" href="https://www.facebook.com/mike.benedict.984">
                            <img src={facebook} className="smedia"></img>
                        </a>
                    </li>
  
      </ul>
    </div>
        

    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav navbar-right">

                    <li>
                        <a href="mailto:benedic2@outlook.com?Subject=Resume%20interest" target="_top">
                            <img src={emailPic} className="smedia"></img>
                        </a>
                    </li>
                    <li>
                        <a target="_blank" href="https://www.linkedin.com/in/michael-benedict-51a9aa69/">
                            <img src={linkedin} className="smedia"></img>
                        </a>
                    </li>
                    
                    <li>
                        <a target="_blank" href="https://twitter.com/mbengineer" class="twitter-follow-button" data-size="large" data-show-screen-name="false" data-show-count="false">
                            <img src={twitter} className="smedia"></img>
                        </a>
                        <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
                    </li>
                    <li>    
                        <a target="_blank" href="https://www.facebook.com/mike.benedict.984">
                            <img src={facebook} className="smedia"></img>
                        </a>
                    </li>
  
      </ul>
    </div>
  </div>
</nav>
        
    );
    }
    };
