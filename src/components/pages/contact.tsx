import { useState } from 'react';
import './contact.scss'
// import { Button, Form, Icon } from "react-bulma-components";
import FormComponent from '../content/form/form';
import { Container, Heading } from 'react-bulma-components';
function Contact() {
    const [name, setName] = useState('rocket');
    const [email, setEmail] = useState('rocket@groot.com');
    const [message, setMessage] = useState('');

    return (
        <Container backgroundColor='gunmetal' breakpoint={'fluid'} id='contactComponent'>
            <Heading textColor='cyan' textAlign={'center'}>Contact</Heading>
            <FormComponent />
        </Container>
    )
}

export default Contact;