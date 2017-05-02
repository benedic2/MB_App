import React, {Component} from 'react';

import Summary from './summary';
import TempControl from './temp_control';
import Log from './log';
import NavBarTop from './navbar_top';

export default class Top extends Component {
    render (){
    return (

        
<div className = "container-fluid main-container">
                <div className="row nav-row">
            <NavBarTop />
                </div>

                <div className="row third-row">            
                    <div className="full-height">
            <Summary />
                    </div>
                </div>

                <div className="row two-third-row">         
                    <div className="full-height">
                        <TempControl />
                        <Log />

                    </div>
                </div>


            </div>
    );
    }
    };

