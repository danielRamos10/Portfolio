import { useState } from "react";
import "./contact.scss";
import FormComponent from "../content/form/form";
import { Heading } from "react-bulma-components";
function Contact() {
  const [name, setName] = useState("rocket");
  const [email, setEmail] = useState("rocket@groot.com");
  const [message, setMessage] = useState("");

  return (
    <div className="contact-container" id="contactComponent">
      <Heading textColor="cyan" textAlign={"center"}>
        Contact
      </Heading>
      <FormComponent />
    </div>
  );
}

export default Contact;
