import React, {Component} from 'react';
import { Link } from 'react-router';

export default class NavBarTop extends Component {

    render (){
        return (

            <nav className="navbar navbar-default navbar-top">
                <div className="container-fluid">
                        <div className="row">
                            <div className="col-xs-2">
                                <Link to="/">
                                    {'<'}
                                </Link>
                            </div>
                            <div className="col-xs-8">
                                Package
                            </div>                     
                        </div>
                    </div>
            </nav>

        );
    }
};
