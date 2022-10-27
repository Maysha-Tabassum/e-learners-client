import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';

const Category = () => {
    const course = useLoaderData();
    return (
        <div>
            <Container>
            <Row>
                <Col lg="3" className='d-none d-lg-block'>
                    <LeftSideNav></LeftSideNav>
                </Col>
                <Col>
                    <h2> This is The Category Section Which has news: {course.length}</h2>
                </Col>
                
            </Row>
           </Container>
        </div>
    );
};

export default Category;