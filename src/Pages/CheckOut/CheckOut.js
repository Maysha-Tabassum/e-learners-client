import React from 'react';
import { Card } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';


const CheckOut = () => {
    const checkoutCourse = useLoaderData();
    const { title, img, name, priceAll, courTeacher } = checkoutCourse;
    console.log(checkoutCourse);
    return (
        <div className="container">

            <h2 className="text-center text-success my-5">Congratulatioins You have Successfully Enroled to this Course</h2>
            <div className="d-flex justify-content-center">
                <div className='container'>
                    <div className=' mt-8 text-center text-success'>
                        <h2>{name}</h2>
                    </div>
                    <div className='mt-6 d-flex justify-content-center align-items-center'>
                        <Card style={{ width: '20rem' }}>
                            <Card.Img style={{ height: '12rem' }} variant="top" src={img} />
                            <Card.Body>
                                <Card.Title>{title}</Card.Title>
                                <Card.Text>
                                    Some quick example text
                                </Card.Text>
                                <div>
                                    <div>
                                        <p>Lecturer : {courTeacher?.lecturer}</p>
                                        <p> Total Classes : {courTeacher?.totalTime}</p>
                                        <p>price : {priceAll}</p>
                                    </div>
                                </div>

                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;