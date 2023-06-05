import "./home.scss";
import { Heading } from "react-bulma-components";
function Home() {
  return (
    <div className="home-container">
      <Heading textColor="flash-white" >
        Hello, my name is...
      </Heading>
      <Heading textColor="cyan" subtitle>
        Daniel Ramos
      </Heading>
    </div>
  );
}

export default Home;
