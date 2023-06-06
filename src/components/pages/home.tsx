import "./home.scss";
import { Heading, Button, Image } from "react-bulma-components";
import me from "/src/assets/me.jpg";
function Home() {
  return (
    <div className="home-container">
      <div className="line"></div>
      <Heading className="intro">Hello, my name is</Heading>
      <Heading className="name anim-typewriter">Daniel Ramos</Heading>
      <Heading className="ocupation">Frontend Developer</Heading>
      <Button
        className="contact-btn"
        color="flame"
        textSize={6}
        textWeight="bold"
        textColor="flash-white"
      >
        {" "}
        Let's Chat!
      </Button>
      {/* <div className="img-container">
        <img src={me} alt="me" className="my-image" height={200} width={200} />
      </div> */}
    </div>
  );
}

export default Home;
