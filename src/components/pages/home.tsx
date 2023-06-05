import "./home.scss";
import { Heading, Button } from "react-bulma-components";
function Home() {
  return (
    <div className="home-container">
      <div className="line">
      </div>
      <Heading className="intro">
        Hello, my name is
      </Heading>
      <Heading className="name anim-typewriter">
      Daniel Ramos
      </Heading>
      <Heading className="ocupation">
       Frontend Developer
      </Heading>
      <Button className="contact-btn" color='flame' textSize={6} textWeight="bold"> Let's Chat!</Button>
    </div>
  );
}

export default Home;
