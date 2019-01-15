import React, { Component } from 'react';
import { Container, Row, Col, Input, Button, Fa, Card } from 'mdbreact';
import {IoAlertCircled} from 'react-icons/lib/fa';




class Contact extends Component {
  render() {
    return (
      <div>
        <h1>Let's Connect! </h1>     
        <h2>Fill out the form below to send an email or give me a call at (801)573-3882 </h2>
    
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
      
     </div>
    );
  }
}




export default Contact;