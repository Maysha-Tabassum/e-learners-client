import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';

const Courses = () => {
    const course = useLoaderData();
    return (
        <div className='mt-8'>
           <Container>
            <Row>
                <Col className='d-none d-lg-block'>
                    <LeftSideNav></LeftSideNav>
                </Col>
                <Col  className='mx-auto'>
                    <div>
                        <h2>Total Courses: {course.length}</h2>
                    </div>
                </Col>
                
            </Row>
           </Container>
           
        </div>
    );
};

export default Courses;