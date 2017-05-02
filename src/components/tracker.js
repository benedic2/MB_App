import React, {Component} from 'react';

import NavBar from './navbar';

export default class Tracker extends Component {
    render (){
    return (
<div className = "container-fluid main-container">
                <div className="row nav-row">
            <NavBar />
                </div>

                <div className="row ninety-height">            
                    <div className="full-height">
                        Tracking image here
                    </div>
                </div>

            </div>
    );
    }
    };

