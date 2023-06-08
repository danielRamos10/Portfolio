import "./home.scss";
import { Heading, Button, Image } from "react-bulma-components";

function Home() {
  return (
    <div className="home-container">
      <Heading className="intro">Hello, my name is</Heading>
      <Heading className="name anim-typewriter">Daniel Ramos</Heading>
      <Heading className="ocupation">Frontend Developer</Heading>
      <div className="img-container">
        <div className="my-image"></div>
      </div>
      <Button
        className="contact-btn"
        color="cyan"
        backgroundColor="gunmetal"
        outlined
        textWeight="bold"
        textSize={6}
        textColor="flash-white"
      >
        Let's Chat!
      </Button>
    </div>
  );
}

export default Home;
