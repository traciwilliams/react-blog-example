import React from 'react';
import ReactDOM from 'react-dom';
import Post from './App';
import './index.css';

var myBlog = {
	title: "Cats are Us",
	author: "Traci",
	body: "look at the fur on the cat",
	comments: ["First!", 
			   "Great",
			   "Feed the cat!"],
  authors: ["Bernie",
         "Smokey",
         "Fluffy"],       
  catFood: ["milk",
          "fish",
          "wet food - yum!"

  ]            
}


ReactDOM.render(
  <Post 
  	title={myBlog.title}
  	author={myBlog.author}
  	body={myBlog.body}
    comments={myBlog.comments}
    allAuthors={myBlog.authors}
    allCatFood={myBlog.catFood}

  />,
  document.getElementById('root')
);
