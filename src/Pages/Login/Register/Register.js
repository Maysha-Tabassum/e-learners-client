import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { ButtonGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Register = () => {
    
    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false);
    const {providerLogin, createUser, updateUserProfile} = useContext(AuthContext)

    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignIn = () => {
       providerLogin(googleProvider)
       .then(result => {
        const user = result.user;
        console.log(user);
       })
       .catch(error => {
        console.error(error)
        setError(error.message);
       })
    }

   const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photoURL, email, password);

    createUser(email, password)
    .then(result => {
        const user = result.user;
        console.log(user);
        setError('');
        form.reset();
        handleUpdateUserProfile(name, photoURL);
    })
    .catch(e => console.error(e));

   }

   const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
        displayName: name,
        photoURL: photoURL
    }
    updateUserProfile(profile)
    .then(() => {})
    .catch(error => console.error(error));
   }

   const handleAccepted = event => {
        setAccepted(event.target.checked)
   }

    return (
        <Form className="container w-50 mx-auto my-6" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Name</Form.Label>
                <Form.Control name="name" type="text" placeholder="Your Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control name="photoURL" type="text" placeholder="Photo URL" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check 
                type="checkbox"
                onClick={handleAccepted} 
                label={<>Accept <Link to="/terms">Tearms and Conditions</Link></>} />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={!accepted}>
                Register
            </Button><br/>
            <Form.Text className="text-danger">
                {error}
            </Form.Text>
            <br/>
            <ButtonGroup className="d-flex">
                <Button onClick={handleGoogleSignIn} className='mb-2' variant="outline-primary"><FaGoogle></FaGoogle>Login with Google</Button>
                <br/>
                <Button className='mb-2' variant="outline-dark"><FaGithub></FaGithub>Login with Github</Button>
            </ButtonGroup>
            
        </Form>
    );
};

export default Register;