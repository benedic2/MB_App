import React, {Component} from 'react';

import Summary from './summary';
import Log from './log';
import NavBarMiddle from './navbar_middle';

export default class Middle extends Component {
    render (){
    return (
        
        <div className = "container-fluid main-container">
                <div className="row nav-row">
            <NavBarMiddle />
                </div>

                <div className="row third-row">            
                    <div className="full-height">
            <Summary />
                    </div>
                </div>

                <div className="row two-third-row">         
                    <div className="full-height">

                        <Log />

                    </div>
                </div>


            </div>
    );
    }
    };

