import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
 CardSubtitle, CardBody } from 'reactstrap';



const Example = (props) => {
  return (
    <CardDeck>
      <Card>
        <CardImg className = "card-img-container" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP_f6nBagsVME9L1o-g0RCGMDiFPpcXau-EKSy-dDDR0unCKu0Dg " alt="Card image cap"/>
        <CardBody>
          <CardTitle>Orange Theory Fitness Tracker</CardTitle><br/>
          <CardSubtitle>Technologies Used: React, Micro, MongoDB</CardSubtitle><br/>
          <CardText>I created this Orange Theory Fitness tracker as a full stack web applicaiton to log my workouts so I could measure my fitness goals and improve my programming skills. </CardText>
          <Button color="orange" >Take a look!</Button>
        </CardBody>
      </Card>

      <Card>
        <CardImg src="https://static1.squarespace.com/static/5432917ae4b0f9bd2d17f873/t/590776993e00be8692d21c0c/1493661340843/?format=750w" alt="Card image cap" />
        <CardBody>
          <CardTitle>DocYou Tracker </CardTitle>
          <CardSubtitle>Technologies: TBD</CardSubtitle> <br/>
          <CardText>I love to learn! Books, documentaries, YouTube... whatever it may be I love learning new things. To keep track of all these new ideas I am building a full stack Documentary Tracker. <div/> Project Start Date : 01/16/2019 </CardText>
          <Button color ="green">TBD</Button>
        </CardBody>
      </Card>
      
    </CardDeck>
  );
};

export default Example;