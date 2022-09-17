import { Container } from "react-bootstrap";
import Slider from "../../../components/Slider";
import NavBar from "../../../components/NavBar";
import Partners from "./components/Partners";
import Footer from "../../../components/Footer";

function Home() {
    return ( 
        <>
        <Container>
            <NavBar/>
            <Slider/>
            <Partners/>
            <Footer/>
        </Container>
        </>
     );
}

export default Home;