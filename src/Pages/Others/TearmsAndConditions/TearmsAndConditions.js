import React from 'react';
import { Link } from 'react-router-dom';

const TearmsAndConditions = () => {
    return (
        <div>
            <h3>Here is our Teamrs and Conditions</h3>
            <p>Go back to: <Link to="/register">Register</Link></p>
        </div>
    );
};

export default TearmsAndConditions;