import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import CourseSummaryCard from '../Shared/CourseSummaryCard/CourseSummaryCard';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';

const Courses = () => {
    const allCourse = useLoaderData();
    return (
        <div className='my-6'>
            <Container>
                <Row>
                    <Col lg="2" >
                        <div>
                            <LeftSideNav></LeftSideNav>
                        </div>
                    </Col>
                    <Col lg="10">
                        <div>
                            <h2 className="text-center text-success my-5">Total Courses: {allCourse.length}</h2>
                            <div className="d-flex flex-wrap">
                            {
                                allCourse.map(course => <CourseSummaryCard
                                    key={course._id}
                                    course={course}

                                ></CourseSummaryCard>)
                            }
                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Courses;