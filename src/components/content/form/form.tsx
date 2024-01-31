import { faCheck, faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";
import "./form.scss";
import { useEffect, useState } from "react";
import { Button, Form, Icon } from "react-bulma-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FormComponent() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [btn, setBtn] = useState(true);

  useEffect(()=>{
    if (name !=='' && email!=='' && message !=='')
    {
    setBtn(false);
    }
    else{
      setBtn(true);
    }
  
  }, [email, message, name])


  
  const onNameChangeHandler = (e: any) => {
    setName(e.target.value);
  };
  const onEmailChangeHandler = (e: any) => {
    setEmail(e.target.value);
  };
  const onMessageChangeHandler = (e: any) => {
    setMessage(e.target.value);
  };
  return (
    <div className="form-container">
      <form
        method="POST"
        data-netlify="true"
        name="contact"
      >
         <input type="hidden" name="form-name" value="contact" data-netlify-honeypot="bot-field"/>
        <Form.Field >
          <Form.Label textColor="oldlace" >
            Name
          </Form.Label>
          <Form.Control >
            <Form.Input
              color={`${name && name.length > 0 ? "caribbean-current" : "burgundy"}`}
              backgroundColor="oldlace"
              type="text"
              id="name"
              name="name"
              placeholder="Rocket"
              onChange={onNameChangeHandler}
            />
            <Icon align="left" size="small" ml={1}>
              <FontAwesomeIcon icon={faUser} color="black" />
            </Icon>
            <Icon align="right" size="small">
              <FontAwesomeIcon icon={faCheck} />
            </Icon>
          </Form.Control>
          {name && name.length > 0 ? (
            <div style={{ marginTop: "2.1rem" }}></div>
          ) : (
            <Form.Help color="burgundy">Name cannot be empty</Form.Help>
          )}
        </Form.Field>
        <Form.Field >
          <Form.Label textColor="oldlace">
            Email
          </Form.Label>
          <Form.Control >
            <Form.Input
              color={`${email && email.length > 0 ? "caribbean-current" : "burgundy"}`}
              backgroundColor="oldlace"
              type="text"
              name="email"
              id="email"
              placeholder="Rocket"
              onChange={onEmailChangeHandler}
            />
            <Icon align="left" size="small" ml={1}>
              <FontAwesomeIcon icon={faEnvelope} color="black" />
            </Icon>
            <Icon align="right" size="small">
              <FontAwesomeIcon icon={faCheck} />
            </Icon>
          </Form.Control>
          {email && email.length > 0 ? (
            <div style={{ marginTop: "2.1rem" }}></div>
          ) : (
            <Form.Help color="burgundy">Email cannot be empty</Form.Help>
          )}
        </Form.Field>
        <Form.Field>
          <Form.Label textColor="oldlace">Message</Form.Label>
          <Form.Textarea
            size={"small"}
            backgroundColor="oldlace"
            placeholder="..."
            name="message"
            id="message"
            color={`${message && message.length > 0 ? "caribbean-current" : "burgundy"}`}
            onChange={onMessageChangeHandler}
          />
          {message && message.length > 0 ? (
            <div style={{ marginTop: "2.1rem" }}></div>
          ) : (
            <Form.Help color="burgundy">Message cannot be empty</Form.Help>
          )}
        </Form.Field>
        <Form.Field kind="group">
          <Form.Control>
            <Button mt={1} type="submit" disabled={btn}>
              Submit
            </Button>
          </Form.Control>
        </Form.Field>
      </form>
    </div>
  );
}
