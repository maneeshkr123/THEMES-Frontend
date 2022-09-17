import { Card } from "react-bootstrap";
import PersonAvatar from "../assets/images/person.png"

function CardItem(props) {
    return (
        <>
            <Card>
                <Card.Img variant="top" src={PersonAvatar} height="100%" />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.desc}
                    </Card.Text>
                </Card.Body>
            </Card></>
    );
}

export default CardItem;