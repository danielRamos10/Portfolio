import { useState } from 'react';
import './contact.scss'
// import { Button, Form, Icon } from "react-bulma-components";
import FormComponent from '../content/form/form';
import { Container } from 'react-bulma-components';
function Contact() {
  const [name, setName] = useState('rocket');
  const [email, setEmail] = useState('rocket@groot.com');
  const [message, setMessage] = useState('');

  return (
    <Container backgroundColor='gunmetal'>
      <FormComponent/>  
    </Container>
    
    // <form>
    //   <Form.Field>
    //     <Form.Label>Name</Form.Label>
    //     <Form.Control>
    //       <Form.Input
    //       color='danger'
    //         placeholder={name}
    //         onChange={(e) => {
    //           return setName(e.target.value);
    //         }}
    //       />
    //       <Icon align="left" size="small">
    //         <i className="fas fa-user" />
    //       </Icon>
    //       <Icon align="right" size="small">
    //         <i className="fas fa-check" />
    //       </Icon>
    //     </Form.Control>
    //     <Form.Help color="danger">Username cannot be empty</Form.Help>
    //   </Form.Field>

    //   <Form.Field>
    //     <Form.Label>Email</Form.Label>
    //     <Form.Control>
    //       <Form.Input
    //         color="danger"
    //         placeholder={email}
    //         onChange={(e) => {
    //           return setEmail(e.target.value);
    //         }}
    //       />
    //       <Icon align="left" size="small">
    //         <i className="fas fa-envelope" />
    //       </Icon>
    //       <Icon align="right" size="small">
    //         <i className="fas fa-exclamation-triangle" />
    //       </Icon>
    //     </Form.Control>
    //     <Form.Help color="danger">Email cannot be empty</Form.Help>
    //   </Form.Field>

    //   <Form.Field>
    //     <Form.Label>Message</Form.Label>
    //     <Form.Textarea
    //       placeholder={message}
    //       onChange={(e) => {
    //         return setMessage(e.target.value);
    //       }}
    //     />
    //   </Form.Field>

    //   <Form.Field kind="group">
    //     <Form.Control>
    //       <Button color="link">Submit</Button>
    //     </Form.Control>
    //     <Form.Control>
    //       <Button color="link" colorVariant="light">
    //         Cancel
    //       </Button>
    //     </Form.Control>
    //   </Form.Field>
    // </form>
    )
}

export default Contact;