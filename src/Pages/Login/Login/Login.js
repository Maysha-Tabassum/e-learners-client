import { GoogleAuthProvider } from 'firebase/auth';
import React, { useState } from 'react';
import { useContext } from 'react';
import { ButtonGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    
    const [error, setError] = useState('')
    const {providerLogin, signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

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
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then( result => {
            const user = result.user;
            console.log(user);
            form.reset();
            setError('');
            toast.success('Successfully Logedin', {
                position: 'top-center',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            navigate(from, {replace: true});
            
        })
        .catch(error => {
            console.error(error);
            toast.error('Bad user Credential', {
                position: 'top-center',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            }) ;
        })
    }

    

    return (
       <div>
         <Form className="container w-60 mx-auto my-6" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit" >
                Login
            </Button>
            <br/>
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
        <p className='text-center'>New to E-Learners ? <Link className='font-bold' to="/register">Register</Link></p>
        <p className='text-danger'>{error}</p>
        <ToastContainer />
       </div>
    );
};

export default Login;