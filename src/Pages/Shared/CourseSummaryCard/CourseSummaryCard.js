import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const CourseSummaryCard = ({ course }) => {
    const { title, _id, img, } = course;
    console.log(course);
    return (
        <div>
            <Container>
                <Row>
                    <Col lg={4}>
                        <Card style={{ width: '17rem', height: '25rem' }}>
                            <Card.Img style={{height: '12rem'}} variant="top" src={img} />
                            <Card.Body>
                                <Card.Title>{title}</Card.Title>
                                <Card.Text>
                                    Some quick example text 
                                </Card.Text>
                                <Button className="mx-auto" variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CourseSummaryCard;