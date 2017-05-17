import React from 'react';
import ReactDOM from 'react-dom';
import Post from './App';
import './index.css';

var myBlog = {
	title: "Cats are Us",
	author: "Smokey",
	body: "look at the fur on the cat",
	contents: ["First!", 
			   "Great",
			   "Feed the cat!"]
}


ReactDOM.render(
  <Post 
  	title={myBlog.title}
  	author={myBlog.author}
  	body={myBlog.body}
  	contents={myBlog.contents}

  />,
  document.getElementById('root')
);
