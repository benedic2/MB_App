import React, {Component} from 'react';
import climb from '../../resource/Climb.jpg';
import friends from '../../resource/Friends.jpg';
import travel from '../../resource/Travel.jpg';

export default class ContentPersonal extends Component {
    render (){
    return (
        
<div className="container-fluid bg-3 text-center">    
        <div className="row" >
            <div className="col-sm-8">
                <img  style={{"height":"300px","width":"400px"}}  src={climb} />
            </div>
                <div className="col-sm-4 text-left">
                    <h3 className="align-middle">My wife Jessica and I enjoy all things outdoors. We rock climb a couple of times a week and head outside for Sport climbing whenever possible. We have climbed in a handful of different countries on a couple of continents.  </h3>
            </div>
        </div>

    
        <div className="row" >
            <div className="col-sm-8">
                <img  style={{"height":"300px","width":"400px"}}  src= {friends} />
            </div>
                <div className="col-sm-4 text-left">
                    <h3 className="align-middle">We also enjoy cooking with friends and experiment in the kitchen frequently. We try out new foods from different regions as much as possible.</h3>
            </div>
        </div>    

        <div className="row" >
            <div className="col-sm-8">
                <img  style={{"height":"300px","width":"400px"}}  src= {travel} />
            </div>
                <div className="col-sm-4 text-left">
                    <h3 className="align-middle">Travel is our passion. We try to explore at least one new country every year.</h3>
            </div>
        </div>    
        
        <div className="row" >
            <div className="col-sm-2"/>
                <div className="col-sm-8 text-left">
                    <h3 className="align-middle">I also genuinely enjoy tech. Many of my personal projects center around learning new technologies. My most recent kick has been in programming, specifically HTML, CSS, and JS.</h3>
            </div>
        </div>    

        
</div>
        
    );
    }
    };
