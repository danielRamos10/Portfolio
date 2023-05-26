import './home.scss'
import { Container, Heading } from "react-bulma-components";
function Home() {
    return (
        <div>
        <Container backgroundColor="gunmetal" breakpoint={'fluid'} id='homeComponent'>
            <Heading textColor='cyan' pt={1} textAlign={'center'}>Home</Heading>
        </Container>
        </div>
    )
}

export default Home;