import React, {Component} from 'react';

export default class ContentLinks extends Component {
    render (){
    return (
        
<div className="container-fluid bg-3 text-center">    
  <div className="row">
    
    <div className="col-sm-3 text-right">
      <p className="maintext">Patents</p>
    </div>
        
    <div className="col-sm-9 text-left" style = {{"padding-bottom":"15px"}}> 
      <p style={{"font-weight":"bold"}}>Lead inventor 25+ patents filed and in process, examples:  </p>
      
        <p>US 9377221 B2 - Variable heat pump using magneto caloric materials </p>
        <p>US 9534817 B2 - Conduction based magneto caloric heat pump</p>
        <p>US 20140165594 A1 B2 - Magneto caloric device with continuous pump </p>

    </div>
        
  </div>

<div className="row">
    
    <div className="col-sm-3 text-right">
      <p className="maintext">Publications</p>
    </div>
        
    <div className="col-sm-9 text-left" style = {{"padding-bottom":"15px"}}> 
      <p style={{"font-weight":"bold"}}>Lead author on 4 journal articles co-author on 5 more, examples:  </p>
      
        <p>Experimental impact of magnet and regenerator
design on the refrigeration performance of firstorder
magnetocaloric materials, International Journal of Refrigeration (2017) </p>
        <p>Design and performance of a novel magnetocaloric heat pump, Science and Technology for the Built Environment (2016)</p>
        <p>A new model of first-order magnetocaloric
materials with experimental validation, International Journal of Refrigeration (2016)</p>

    </div>
        
  </div>
        
        
       
</div>
        
    );
    }
    };
