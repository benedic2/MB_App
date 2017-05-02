import React, {Component} from 'react';
import {Link} from 'react-router';
import NavBar from './navbar';



export default class MainHome extends Component {
    render (){
        return (

            <div className = "container-fluid main-container">
                <div className="row nav-row">
                    <NavBar />
                </div>

                <div className="row third-row">            
                    <div className="full-height">
                        <Link to="/top">
                            top
                        </Link>
                    </div>
                </div>

                <div className="row third-row">            
                    <div className="full-height">
                        <Link to="/middle">
                            bottom
                        </Link>
                    </div>
                </div>

                <div className="row third-row">            
                    <div className="full-height">
                        <Link to="/bottom">  
                            middle
                        </Link>
                    </div>
                </div>

            </div>
        );
    }
};

