import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const CourseSummaryCard = ({ course }) => {
    const { title, category_id, img, } = course;
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
                                <Link to={`/courses/${category_id}`}>
                                <Button className="btncart" variant="primary">Show Details</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CourseSummaryCard;

