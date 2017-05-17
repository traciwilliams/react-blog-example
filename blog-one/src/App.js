import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Post extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

        </div>
        <p className="App-intro">
          <h1>Title of book {this.props.title}</h1>
          <h2>Author {this.props.author}</h2>
          <h3>{this.props.body}</h3>
          <h4>{this.props.contents[2]}</h4>
          
        </p>
      </div>
    )m;
  }
}

export default Post;
