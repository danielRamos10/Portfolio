import { Container, Heading } from "react-bulma-components"

import './about.scss';
import ContentCard from "../content/card/content-card";
function About() {
    return (
        <div>
        <Container backgroundColor="gunmetal" breakpoint={'fluid'} id="aboutComponent">
            <Heading textColor="cyan" textAlign={'center'}>About</Heading>
            <ContentCard/>
        </Container>
        </div>
    )
}
export default About