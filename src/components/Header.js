import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Header=(props) => {
    const handleClick = () => {
        window.open("https://finesoutherngentlemen.com/search?type=product&q=rattlesnake+milk" )
    };
    return (
        <Container fluid style={{display: 'block'}}>
        <header className="Header">
            <Link className="Title" to="/">
                <h1 className="RM">RATTLESNAKE MILK</h1>
            </Link>
        </header>
            <nav className="Nav">
                <Link className="Links" to="/">Home</Link>
                <Link className="Links" to="/shows">Shows</Link>
                <Link className="Links" to="/listen">Listen</Link>
                <Link className="Links" to="/videos">Videos</Link>
                <Link className="Links" to="/merch" onClick={handleClick}>Merch</Link>
                <Link className="Links" to="/contact">Contact</Link>
            </nav>
            </Container>
    );   
};


export default Header;
