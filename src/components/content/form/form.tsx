import {
  faCheck,
  faEnvelope,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "./form.scss";
import { useState } from "react";
import { Button, Form, Icon } from "react-bulma-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FormComponent() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const onSubmitHandler = (e: any) => {
    e.preventDefault();
    if (name.trim() === "") {
      return;
    }
  };
  const onNameChangeHandler = (e: any) => {
    setName(e.target.value);
    console.log(name);
  };
  const onEmailChangeHandler = (e: any) => {
    setEmail(e.target.value);
    console.log(email);
  };
  const onMessageChangeHandler = (e: any) => {
    setMessage(e.target.value);
    console.log(message);
  };
  return (
      <div className="form-container">
        <form onSubmit={onSubmitHandler}>
          <Form.Field backgroundColor="gunmetal">
            <Form.Label textColor="flash-white" backgroundColor="gunmetal">
              Name
            </Form.Label>
            <Form.Control backgroundColor="gunmetal">
              <Form.Input
                color={`${name && name.length > 0 ? "cyan" : "flame"}`}
                backgroundColor="flash-white"
                type="text"
                id="name"
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
              <Form.Help color="flame">Name cannot be empty</Form.Help>
            )}
          </Form.Field>
          <Form.Field backgroundColor="gunmetal">
            <Form.Label textColor="flash-white" backgroundColor="gunmetal">
              Email
            </Form.Label>
            <Form.Control backgroundColor="gunmetal">
              <Form.Input
                color={`${email && email.length > 0 ? "cyan" : "flame"}`}
                backgroundColor="flash-white"
                type="text"
                id="name"
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
              <Form.Help color="flame">Email cannot be empty</Form.Help>
            )}
          </Form.Field>
          <Form.Field>
            <Form.Label textColor="flash-white">Message</Form.Label>
            <Form.Textarea
              size={"small"}
              backgroundColor="flash-white"
              placeholder="..."
              color={`${message && message.length < 0 ? "cyan" : "flame"}`}
              onChange={onMessageChangeHandler}
            />
            {message && message.length > 0 ? (
              <div style={{ marginTop: "2.1rem" }}></div>
            ) : (
              <Form.Help color="flame">Message cannot be empty</Form.Help>
            )}
          </Form.Field>
          <Form.Field kind="group">
            <Form.Control>
              <Button outlined mt={1} type="submit">
                Submit
              </Button>
            </Form.Control>
          </Form.Field>
        </form>
      </div>
  );
}
