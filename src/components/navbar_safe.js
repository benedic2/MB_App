import React, {Component} from 'react';
import { Link } from 'react-router';
import emailPic from '../../resource/email.jpg';
import twitter from '../../resource/twitter.png';
import facebook from '../../resource/facebook.ico';


export default class NavBar extends Component {
    
    render (){
    return (

    <nav className="navbar navbar-inverse">
        <div className="container-fluid">
    
            <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="nav navbar-nav">
                    <li style={{"background":"black"}}>
                        <Link to="/" >    
                            Home
                        </Link>
                    </li>
                    <li style={{"padding-left":"20px","color":"great","padding-top":"5px"}} className="text-middle"><h4>benedic2@outlook.com</h4></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                    
                    <li>
                    <a href="mailto:benedic2@outlook.com?Subject=Resume%20interest" target="_top">
                        <img src={emailPic} className="smedia"></img>
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
