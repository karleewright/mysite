import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
 CardSubtitle, CardBody } from 'reactstrap';

const Example = (props) => {
  return (
    <CardDeck>
      <Card>
        <CardImg className = "card-img-container" top width="50%" src="http://icons-for-free.com/free-icons/png/512/308434.png" alt="Card image cap"/>
        <CardBody>
          <CardTitle>Online Store</CardTitle>
          <CardSubtitle>Techologies: Angular, Mongoose, Hapi</CardSubtitle>
          <CardText>With a team, we built a store application using the above technologies.</CardText>
          <Button>Take a look</Button>
        </CardBody>
      </Card>

      <Card>
        <CardImg top width="50%" src="https://static1.squarespace.com/static/5432917ae4b0f9bd2d17f873/t/590776993e00be8692d21c0c/1493661340843/?format=750w" alt="Card image cap" />
        <CardBody>
          <CardTitle>Documentary Log App</CardTitle>
          <CardSubtitle>Technologies: TBD</CardSubtitle> <br/>
          <CardText>I love documentaries! <div/>Take a look at this full stack app I created to help me log and keep track of them! </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      
    </CardDeck>
  );
};

export default Example;