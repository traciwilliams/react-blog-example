import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Author extends Component {
  render() {
    return (
      <div>
          
          <h2>An array Written by {this.props.author}</h2>
       
      </div>
    );
  }
}

export default Author;
