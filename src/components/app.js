import React, { Component } from 'react';
import NavBar from './navbar';
import Footer from './footer';


export default class App extends Component {
  render() {
    return (
      <div className="ninety-height">
        {this.props.children}
        <Footer />
    </div>
    );
  }
}
