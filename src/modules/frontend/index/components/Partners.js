import { Col, Row } from "react-bootstrap";
import CardItem from "../../../../components/CardItem";

function Partners() {
    var partners = [
        {
            'title': "Maneesh",
            'desc': 'Software Engineer'
        },
        {
            'title': "Ravi",
            'desc': 'Full Stack Developer'
        },
        {
            'title': "Saurabh",
            'desc': 'Process Associate'
        },
        {
            'title': "Umakant",
            'desc': 'Senior Developer'
        },
    ];
    return (
        <>
            <Row className="mt-4">
                <Col md={12}>
                    <h1 className="text-center">Our Partners</h1>
                    <h5 className="text-center">kldjfk sdajlkjlk  jdsakljf dsaf sddfas dsdl</h5>
                </Col>
            </Row>
            <Row className="mt-4">
                {
                    partners.map((val, key) => {
                        return (
                            <Col md={3}>
                                <CardItem key={key}
                                    title={val.title}
                                    desc={val.desc}
                                />
                            </Col>
                        );
                    })
                }
            </Row>
        </>
    );
}

export default Partners;