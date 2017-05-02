import React, {Component} from 'react';
import pizza from '../../resource/Pizza.jpg'
import cnet from '../../resource/Cnet.jpg'


export default class ContentMedia extends Component {
    render (){
    return (
        
<div className="container-fluid bg-3 text-center">    
        <div className="row" >
            <div className="col-sm-8">
                <iframe  style={{"height":"300px","width":"400px"}}  src="https://www.youtube.com//embed/9eYuQnqIXpY"></iframe>
            </div>
                <div className="col-sm-4 text-left">
                    <h3 className="align-middle">Video about magnetocaloric technology which I developed for GE. Explains how it works and shows some examples of my prototypes</h3>
            </div>
        </div>

    
        <div className="row" >
            <div className="col-sm-8">
                <iframe  style={{"height":"300px","width":"400px"}}  src="https://www.youtube.com//embed/uDF_COU1OJI"></iframe>
            </div>
                <div className="col-sm-4 text-left">
                    <h3 className="align-middle">Video about magnetocaloric technology which I developed for GE. Explains how it works and shows some examples of my prototypes</h3>
            </div>
        </div>    
    
        <div className="row" >
            <div className="col-sm-8">
                <a target="_blank" href="http://www.digitaltrends.com/home/ge-firstbuild-monogram-pizza-oven/" >
                <img  style={{"height":"300px","width":"400px"}}  src={pizza}></img>
                </a>
            </div>
                <div className="col-sm-4 text-left">
                    <h3 className="align-middle">Article in Digital Trends talking about about one of the funnier projects I have had; the "Digital Pizza".</h3>
            </div>
        </div>    

        <div className="row" >
            <div className="col-sm-8" style={{"padding-top":"7px"}}>
                <a target="_blank" href="https://www.cnet.com/news/your-next-refrigerator-may-run-on-magnets/https://www.cnet.com/news/your-next-refrigerator-may-run-on-magnets/" >
                <img  style={{"height":"300px","width":"400px"}}  src={cnet}></img>
                </a>
            </div>
                <div className="col-sm-4 text-left">
                    <h3 className="align-middle">Cnet coverage of some of the first experimental results from the magnetocaloric project.</h3>
            </div>
        </div>    
    
        
</div>
        
    );
    }
    };
