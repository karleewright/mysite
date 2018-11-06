import React, { Component } from 'react';
import { Container, Row, Col, Input, Button, Fa, Card } from 'mdbreact';




class Contact extends Component {
  render() {
    return (
      <div>
        <h1>Let's Connect!</h1>
        <p1> LinkedIn / GitHub </p1> <br/>
          <p2>Logos</p2>
        
      {/* <Container className = "form-container"> */}
        <Row>
        
          <Col className = "form-body" md="6">
          <Card>
            <form method="POST" action="https://formspree.io/karleewright87@gmail.com">
              <p className="h5 text-center mb-4"></p>
              
              <div className="grey-text form-text" > 
                <Input label="Your name" icon="user" name= "name" input type="text" validate error="wrong" success="right"/>
                <Input label="Your email" icon="envelope" name= "_replyto" input type="email" />
                <Input input type="textarea" rows="2" label="Your message" icon="pencil"/>
                <Input type="hidden" name="_next" value="https://site.io/thanks.html" />
                <Input type="hidden" name="_format" value="plain" />
              </div>
              
              <div className="text-center">
                <Button type = 'Submit'  outline color="info"> Send <Fa icon="paper-plane-o" className="ml-1"/></Button>
              </div>

            </form>
            </Card>
            </Col>
           
          </Row>
        {/* </Container> */}
              {/* <form action="https://formspree.io/your@email.com" method="POST">
                  <input type="text" name="name">
                  <input type="email" name="_replyto">
                  <input type="submit" value="Send">
                  </form> */}
      </div>
        
    );
  }
}





      // <div className="name-form">
      //     <h1>Contact Me!</h1>
      //     <form method="POST" action="https://formspree.io/karleewright87@gmail.com"/>
      //     <input type="email" name="email" placeholder="Your email"/><br/>
      //     <textarea name="message" placeholder="Enter your Message"/><br/>
      //     <button type="submit">Send Message</button>
      // </div>

  


export default Contact;