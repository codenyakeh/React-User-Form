import React from 'react'
import { Card, Col, Button } from 'react-bootstrap'

const User = (props) => {
    return (
        <Col md="4" style={{ marginBottom: "1rem" }}>

            <Card>
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">
                        CodeTrain User
                    </Card.Subtitle>
                    <Card.Title>{props.userInfo.name}</Card.Title>
                    <Card.Text>
                        <p>Email: {props.userInfo.email}</p>
                        <p>Gen: {props.userInfo.gen}</p>
                    </Card.Text>
                    <Button
                        style={{ background: "pink", border: "none", color: "#FE036A" }}>
                        Edit User
                    </Button>
                    <Button
                        style={{ background: "pink", border: "none", color: "#FE036A", marginLeft: "5px" }}>
                        Delete User
                    </Button>
                </Card.Body>
            </Card>

        </Col>

    )
}

export default User


