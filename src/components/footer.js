import React, {Component} from 'react';
import { Link } from 'react-router';
import resThumb from '../../resource/resume_thumb.jpg';

export default class Footer extends Component {
    render (){
    return (

<nav className="navbar navbar-default navbar-bottom footer">
      <div className="row">
      <div className="col-xs-4"><Link to="tracker">track</Link></div>
      <div className="col-xs-4"><Link to="tracker">box</Link></div>
      <div className="col-xs-4"><button>access</button></div>
  
      </div>
</nav>
        )};
}
