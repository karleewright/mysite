import React, { Component } from 'react';
import { Container, Row, Col, Input, Button, Fa, Card } from 'mdbreact';




class Contact extends Component {
  render() {
    return (
      <div>
      {/* <Container className = "form-container"> */}
        <Row>
        
          <Col className = "form-body" md="6">
          <Card>
            <form method="POST" action="https://formspree.io/karleewright87@gmail.com">
              <p className="h5 text-center mb-4">Contact Me!</p>
              
              <div className="grey-text form-text" > 
                <Input label="Your name" icon="user"  input type="text" validate error="wrong" success="right"/>
                <Input label="Your email" icon="envelope" input type="email" />
                <Input label="Subject" icon="tag" input type="text" validate error="wrong" success="right"/>
                <Input input type="textarea" rows="2" label="Your message" icon="pencil"/>
              </div>
              
              <div className="text-center">
                <Button inputtype = 'Submit' value = 'send' outline color="secondary">Send <Fa icon="paper-plane-o" className="ml-1"/></Button>
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