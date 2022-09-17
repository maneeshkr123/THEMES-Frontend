import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../../assets/images/logo192.png";

function LogIn() {
    return (
        <>
            <Container fluid style={{ background: "grey" }}>
                <div className="d-flex align-items-center justify-content-center" style={{ height: "100vh" }}>
                    <div style={{ padding: "60px 70px 80px 70px", background: "white", width: "400px", "border-radius": "10px" }}>
                        <Form className="d-grid gap-2">
                            <img src={Logo} className="mb-4 mx-auto" height="100px" />

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
                    </div>
                </div>
            </Container>
        </>
    );
}

export default LogIn;