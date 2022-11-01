import React from 'react';
import { Card } from 'react-bootstrap';


const CheckOutCard = ({course}) => {
    const {title, img, name, priceAll, courTeacher} = course;
    return (
        <div>
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
    );
};

export default CheckOutCard;