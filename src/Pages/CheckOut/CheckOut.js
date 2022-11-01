import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import CheckOutCard from '../Shared/CheckOutCard/CheckOutCard';

import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';

const CheckOut = () => {
    const checkoutCourse = useLoaderData();
    console.log(checkoutCourse);
    return (
        <div>
        <Container>
            <Row>
                <Col lg="3" className='d-none d-lg-block'>
                    <LeftSideNav></LeftSideNav>
                </Col>
                <Col lg="9">
                    <div>
                        <h2 className="text-center text-success my-5"> This is The Category Section Which has news: {checkoutCourse.length}</h2>
                        <div className="d-flex justify-content-center">
                            {
                                checkoutCourse.map(course => <CheckOutCard
                                    key={course._id}
                                    course={course}
                                ></CheckOutCard>)
                            }
                        </div>
                    </div>
                </Col>

            </Row>
        </Container>
    </div>
    );
};

export default CheckOut;