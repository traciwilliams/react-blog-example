import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Author from './Author.js';
import Food from './Food.js';



class Post extends Component {
  render() {

    let authors = [
      <Author author={this.props.allAuthors[0]}/>,
      <Author author={this.props.allAuthors[1]}/>,
      <Author author={this.props.allAuthors[2]}/>

    ];

   let catFoods = [
      <Food food={this.props.allCatFood[0]}/>,
      <Food food={this.props.allCatFood[1]}/>,
      <Food food={this.props.allCatFood[2]}/>

    ];




    return (
      <div>
          <h1>Title of book {this.props.title}</h1>
          {authors}
          {catFoods}

          <h2>by {this.props.author}</h2>
        
       
          <p>{this.props.body}</p>
          <h4>{this.props.comments[2]}</h4>
        
      </div>
    );
  }
}

export default Post;
