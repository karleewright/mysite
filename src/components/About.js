import React, { Component } from 'react';
import { Button, Card, CardBody, CardImage, CardTitle, CardText, CardGroup } from 'mdbreact';



class About extends Component {
  render() {
    
    
    
    
    return (
      <div className="cards">
          <h1>About</h1>
          <CardGroup deck>

<Card>
  <CardImage src="https://mdbootstrap.com/img/Photos/Others/images/16.jpg" alt="Card image cap" top hover overlay="white-slight"/>
  <CardBody>
    <CardTitle tag="h5">Personal</CardTitle>
    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
    <Button color="light-blue" size="md">read more</Button>
  </CardBody>
</Card>

<Card>
  <CardImage src="https://mdbootstrap.com/img/Photos/Others/images/14.jpg" alt="Card image cap" top hover overlay="white-slight"/>
  <CardBody>
    <CardTitle tag="h5">Professional</CardTitle>
    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
    <Button color="light-blue" size="md" href="/resume">View Resume</Button>
    
  </CardBody>
</Card>


</CardGroup>
      </div>
    );
  }
}





export default About;
