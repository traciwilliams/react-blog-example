import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Food extends Component {
  render() {
    return (
      <div>
          
          <h2>An array about cat food  {this.props.food}</h2>
       
      </div>
    );
  }
}

export default Food;