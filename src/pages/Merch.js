import { Container, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Merch =(props) => {

    return (
        <Container style={{display: 'block', maxWidth: '800px', padding: 20}}>
        <Image
            src="https://i.imgur.com/ZpZxmez.jpg"
            fluid
        />

        </Container>
    )
};


export default Merch;