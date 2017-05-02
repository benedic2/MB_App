import React, {Component} from 'react';
import { Link } from 'react-router';
import resThumb from '../../resource/resume_thumb.jpg';
import media from '../../resource/media_thumb.jpg';
import patent from '../../resource/patent_thumb.jpg';
import personal from '../../resource/personal_thumb.jpg';

export default class Footer extends Component {
    render (){
    return (

    //    <div> footer text</div>
       
    <div className="container-fluid bg-3 text-center">    
          
    <div className="row">
        

    <div className="col-sm-3 text-center footerBanner"> 
    <Link to="/resume" >    
        <img src= {resThumb} className="img-fluid" alt="Responsive-image"/>
            <div className="overlay" >
                <div className="caption">
                    <h2 >resume</h2>
                </div>
            </div>
        </Link>    
    </div>

    <div className="col-sm-3 text-center footerBanner"> 
    <Link to="/media" >    
        <img src={media}  className="img-fluid" alt="Responsive-image"/>
            <div className="overlay">
                <div className=" caption">
                    <h2 >media</h2>
                </div>
            </div>
        </Link>    
    </div>
      
    <div className="col-sm-3 text-center footerBanner"> 
    <Link to="/publications" >    
        <img src={patent}  className="img-fluid" alt="Responsive-image"/>
            <div className="overlay">
                <div className=" caption">
                    <h2 >publications</h2>
                </div>
            </div>
        </Link>    
    </div>
        
    <div className="col-sm-3 text-center footerBanner"> 
    <Link to="/personal" >    
        <img src={personal}  className="img-fluid" alt="Responsive-image"/>
            <div className="overlay">
                <div className=" caption">
                    <h2 >personal</h2>
                </div>
            </div>
        </Link>    
    </div>

  </div>
</div>

        
    );
    }
    };
