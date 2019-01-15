import React, { Component } from 'react';
import { CardBody, CardImage } from 'mdbreact';
var Underconstruction = require('../Assets/Underconstruction.png');

class Blog extends Component {
  render() {
    return (
      <div>
      <CardImage  className="myblog" img src= {Underconstruction}  />
     

      <h1>
      My Future Blog Under Construction
      </h1>  
      
      </div>
   
     

    );
  }
}

export default Blog;