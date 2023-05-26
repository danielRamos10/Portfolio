import './skills.scss'
import { Container, Heading } from "react-bulma-components";
function Skills() {
    return (
        <Container backgroundColor="gunmetal" breakpoint={'fluid'} id='skillsComponent'>
            <Heading textColor='cyan' textAlign={'center'}>Skills</Heading>
        </Container>
    )
}

export default Skills;