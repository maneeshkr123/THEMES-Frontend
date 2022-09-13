import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo192.png";

function LogIn() {
    return (
        <>
            <Container fluid style={{background:"grey", height:"100vh"}}>
                <Row>
                    <Col md={4} xs={{ offset: 4 }} className="text-center mt-5 pt-5" offset>
                        <div style={{padding:"60px 70px 80px 70px", background:"white", "border-radius":"10px"}}>
                            <img src={Logo} className="mb-5" height="100px" />
                            <Form className="d-grid gap-2">
                                <Form.Group className="mb-4" controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group className="mb-4" controlId="formBasicPassword">
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>

                                <Button as={Link} to="/home" variant="primary" type="submit">
                                    Login
                                </Button>
                            </Form>
                            <a href="#" className="text-sm text-left">dksl</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default LogIn;