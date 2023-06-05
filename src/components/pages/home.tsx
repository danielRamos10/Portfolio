import "./home.scss";
import { Heading } from "react-bulma-components";
function Home() {
  return (
    <div className="home-container">
      <Heading textColor="cyan" textSize={1}>
        Hello there, my name is...
      </Heading>
      <Heading textColor="cyan" textSize={1}>
        Daniel Ramos
      </Heading>
    </div>
  );
}

export default Home;
