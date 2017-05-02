import React, {Component} from 'react';

export default class ContentResume extends Component {
    render (){
    return (
        
<div className="container-fluid bg-3 text-center">    
  <div className="row">
    
    <div className="col-sm-3 text-right">
      <p className="maintext">Skills</p>
    </div>
        
    <div className="col-sm-9 text-left" style = {{"padding-bottom":"15px"}}> 
      <p>ME: Thermodynamics, magnetics, and all thing ME design prototyping and building, Lean and Six Sigma product development, modeling in ANSYS Solidworks Pro-e and MagNET</p>
      
        <p>Business:  crowdsourcing, black-belt lean six sigma, IP development, team managment</p>
      
        <p>Other: basic HTML CSS javascript (React, Node, Webpack, Babble)</p>
    </div>
        
  </div>

  <div className="row">
    
    <div className="col-sm-3 text-right">
      <p className="maintext">Experience</p>
    </div>
        
    <div className="col-sm-9 text-left" style = {{"padding-bottom":"15px"}}> 
      <p style={{"font-weight":"bold"}}>2016-Present: Manager external research – GE/GE Appliances</p>
      
        <p>Responsible for finding partners for research projects, creating teams, overseeing and overseeing projects.</p>
        <p>Projects ranging from multi-million  dollar government research to 6 month lean product development.</p>
        <p>20+ patents in process, 4 granted</p>

      <p style={{"font-weight":"bold"}}>2012-2016: Research team lead – Magnetocaloric – GE </p>
      
        <p>Lead an international team of scientists and engineers on cutting edge magnetocaloric cooling project.</p>
        <p>Responsible for many world’s first in experimental results.</p>
        <p>Lead author 4 journal articles, co-author 4 more. </p>

        
      <p style={{"font-weight":"bold"}}>2010-2012: GE Edison leadership development program - GE</p>
      
        <p>Rotational program to develop engineering leaders. </p>
        <p>Rotations in new product introduction, product cost out, project scoping, and research. </p>
        <p>Worked with factory on the roll out of new products and DFM.</p>

        
    </div>
  </div> 
        
  <div className="row">
    
    <div className="col-sm-3 text-right">
      <p className="maintext">Education</p>
    </div>
        
    <div className="col-sm-9 text-left" style = {{"padding-bottom":"15px"}}> 
      <p style={{"font-weight":"bold"}}>Ph.D. Mechanical Engineering  / University of Florida - 2016</p>
      <p style={{"font-weight":"bold"}}>Masters Mechanical Engineering / University of Florida - 2010</p>
      <p style={{"font-weight":"bold"}}>B.S. Mechanical Engineering / University of South Florida - 2007</p>

      
      
    </div>
  </div>
        
        
       
</div>
        
    );
    }
    };
