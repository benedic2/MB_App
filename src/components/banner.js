import React, {Component} from 'react';
import head from '../../resource/Head.png';

export default class Banner extends Component {
    render (){
    return (
      <div className="jumbotron">
        <div className="container-fluid">
            <div className="row">  
                <div className="col-sm-3" > 
                    <img className="img-head" src={head} />
                </div>
                <div className ="col-sm-9 container">
                    <div className = "highlighter">
                    <h1>Michael Benedict</h1>      
                    <p>A little about what I do...</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
    }
    };


        
   