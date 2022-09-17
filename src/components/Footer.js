import { Col, Row } from "react-bootstrap";

function Footer() {
    return (
        <>
            <div className="mt-3" style={{ "color": "white", "background": "black" }}>
                <Row className="mx-5 py-3">
                    <Col md={4}>
                        <div className="text-start">
                            <ul className="list-unstyled">
                                <li>Item1</li>
                                <li>Item1</li>
                                <li>Item1</li>
                                <li>Item1</li>
                            </ul>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="text-center">
                            <ul className="list-unstyled">
                                <li>Item1</li>
                                <li>Item1</li>
                                <li>Item1</li>
                                <li>Item1</li>
                            </ul>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="text-end">
                            <ul className="list-unstyled">
                                <li>Item1</li>
                                <li>Item1</li>
                                <li>Item1</li>
                                <li>Item1</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className="text-center">
                            © 2020 Copyright: Maneesh Kumar
                        </p>
                    </Col>
                </Row>

            </div>
        </>
    );
}

export default Footer;