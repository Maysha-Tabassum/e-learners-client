import React from 'react';
import { Button, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CourseDetailsCard = ({course}) => {
    
    const {title, img, _id,  name, priceAll, courTeacher} = course;
    return (
       <div className='container'>
         <div className=' mt-8 text-center text-success'>
            <h2>{name}</h2>
         </div>
         <div className='mt-6 pb-6 d-flex justify-content-center align-items-center'>
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
                    <Link to={`/course-details/${_id}`}>
                    <Button className="btncart" variant="success">Get Premium Access</Button>
                    </Link>
                </Card.Body>
            </Card>
         </div>
       </div>
           
    );
};

export default CourseDetailsCard;