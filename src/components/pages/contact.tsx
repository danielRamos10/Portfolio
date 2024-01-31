
import "./contact.scss";
import FormComponent from "../content/form/form";
import { Heading } from "react-bulma-components";
function Contact() {

  return (
    <div className="contact-container" id="contactComponent">
      <Heading textColor="caribbean-current" textAlign={"center"}>
        Contact
      </Heading>
      <FormComponent />
    </div>
  );
}

export default Contact;
