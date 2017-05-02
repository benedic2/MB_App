import React, {Component} from 'react';

import Summary from './summary';
import TempControl from './temp_control';
import Log from './log';
import NavBarBottom from'./navbar_bottom';

export default class Bottom extends Component {
    render (){
    return (
<div className = "container-fluid main-container">
                <div className="row nav-row">
            <NavBarBottom />
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

