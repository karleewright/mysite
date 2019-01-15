import React, { Component } from 'react';
import { Button, Card, CardBody, CardImage, CardTitle, CardText, CardGroup } from 'mdbreact';
// import '../CSS/Style'; 

var ProfilePic = require('../Assets/profilepic.JPG');
var Mountains = require('../Assets/mountainimage.jpeg');
var Karleepersonal = require('../Assets/IMG-4644.jpg');

class About extends Component {
  render() {
    return (
      <div className="cards">
          <h1>About</h1>
        <CardGroup deck>

          <Card>
            <CardImage 
            className= "personal" 
            img src={ProfilePic} 
            alt="Personal Pic" 
            top hover overlay="white-slight"/>
          <CardBody>
          <CardTitle tag="h5">Hi, I am Karlee.</CardTitle>
           <CardText>Thanks for checking out my Website! <br/> Born and raised in SLC, UT I am new to the Web Development scene. With a background in people management, sales and marketing I am passionate about the intersection of business and technology. Having had experience leading multiple cross-functional teams in various settings, I understand the importance of teamwork and creating scalable solutions for clients and customers. With a Bachelor's Degree in Sociology and my Certificate of Proficiency from Helio Training for Full Stack Web Development, I hope to work with a team that will assist me in the development of my technical skills while supporting a strong client base with meaningful products and services.</CardText>
          <Button color="purple" size="md" href="Resume_20181104_Rev0-1.pdf">
          View My Resume</Button> 
          <Button color="blue" size="md" href="https://www.linkedin.com/in/karleerheawright/">
          Connect on LinkedIn</Button>
          </CardBody>
          </Card>

          <Card>
          <CardImage 
          img src= {Karleepersonal} className="card-img-top"
          alt="Mountains" top hover overlay="white-slight"/>
          <CardBody>

          <CardTitle tag="h5"></CardTitle>
          <CardText> <h1> Personal Interests: </h1><br/>
            <h4>Fitness~</h4> I do Orange Theory Fitness at least 4 times a week to keep myself sane and healthy. <br/> In addition to that, I am training for my first half marathon this July. I am super excited! <br/>
            <br/>
            <h4>The Great Outdoors~</h4> When the weather is nice, I love camping and fly fishing with my family and 3 dogs. <br/>
            <br/>
            <h4>Reading~</h4> I like to read books in 3's. Currently I am chipping away at "Dont Make Me Think" by Steve Krug, "Scrum" by Jeff Sutherland and "Thinking Fast and Slow" by Daniel Kahneman.<br/>
            <br/>
            <h4>Recent Rabbit Holes~</h4> Data Science (Cynthia Dwork is my hero), Biomimicry, & of course Computer Programming! <br/>
              </CardText>
         

          <Card>
          <CardImage 
          img src= {Mountains} className="card-img-top"
          alt="Mountains" top hover overlay="white-slight"/>
          <CardBody>

          <CardTitle tag="h5"></CardTitle>
          <CardText>"The top of one mountain is always the bottom of another."
            -Marianne Williamson </CardText>
          <Button color="grey" size="md" href="/blog">
          Check Out My Blog!</Button>
          </CardBody>
          </Card>

          </CardBody>
          </Card>
          
          


</CardGroup>
      </div>
    );
  }
}





export default About;
