import { Container, Image } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';


const Home =(props) => {
    return (
        <Container style={{display: 'block', maxWidth: '800px', padding: 20}}>
            <Image
                src="https://i.imgur.com/SNmrUIl.jpg"
                fluid
            />
        </Container>

    )
}

export default Home;