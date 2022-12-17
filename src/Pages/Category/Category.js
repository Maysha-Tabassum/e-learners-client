import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import CourseDetailsCard from '../Shared/CourseDetailsCard/CourseDetailsCard';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';
import ReactPrint from 'react-to-print';
import {useRef} from 'react';

const Category = () => {
    const categoryCourse = useLoaderData();
    const ref = useRef();
    console.log(categoryCourse);
    return (
        <div>
            <Container>
                <Row>
                    <Col lg="3" className='d-none d-lg-block'>
                        <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col lg="9">
                        <div>
                            <h2 className="text-center text-success my-4"> This is The Category Section Which has news: {categoryCourse.length}</h2>
                        <ReactPrint className='mx-8' trigger={()=><button>Download PDF</button>} content={()=>ref.current} />
                            <div ref={ref} className="d-flex justify-content-center">
                                {
                                    categoryCourse.map(course => <CourseDetailsCard
                                        key={course._id}
                                        course={course}
                                    ></CourseDetailsCard>)
                                }
                            </div>
                        </div>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Category;