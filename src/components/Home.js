import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';
var professional = require('../Assets/professional.png');


class Home extends Component {
  render() {
    return (
    <div className="home">
      <Jumbotron >
        <h1 className="display-3" >Hello there!</h1> <br/>
      
        <p className="lead"> Thank you for stopping by! If you would like to get in touch, please feel free to contact me via phone, email or LinkedIn.</p>
        
      
          <Button color="purple" href = "/contact"> Let's Connect!</Button>
        
        
      </Jumbotron>
      </div>
    );
  }
}

export default Home;