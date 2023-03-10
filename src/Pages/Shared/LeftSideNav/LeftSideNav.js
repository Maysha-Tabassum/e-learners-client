import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect( () => {
        fetch('https://e-learners-server.vercel.app/course-categories')
        .then(res => res.json())
        .then(data => setCategories(data));
    }, [])

    return (
        
           <div>
            
             <h2 className="text-center text-success my-5">Course List</h2>
            <div>
                {
                    categories.map(category => <p key={category.id}>
                       <Link to={`/courses/${category.id}`}>{category.name}</Link> 
                       </p>)
                }
            </div>
           </div>
        
    );
};

export default LeftSideNav;