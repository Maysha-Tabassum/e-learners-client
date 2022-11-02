import React, { useContext, useState } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { FaUser } from 'react-icons/fa';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import img1 from '../../../assets/img1.png';
import Toggle from '../../../Toggle/Toggle';


const Header = () => {
  const [toggle, setToggle] = useState(false);

  const { user, logOut } = useContext(AuthContext);

  const handleToggleChange = () => {
    setToggle(!toggle);
  }

  const handleLogOut = () => {
    logOut()
    .then(() => {})
    .catch(error => console.error(error))
  }
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container className='d-flex justify-between'>
      <Image style={{ height: '30px' }} roundedCircle
                  src={img1}></Image>
        <Navbar.Brand className="ms-3" href="#home">E-learners</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="ms-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/courses">Courses</Nav.Link>
            <Nav.Link href="/faq">FAQ</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              {
                user?.uid ?
                  <>
                    <span>{user?.displayName}</span>
                    <Button variant="light" onClick={handleLogOut}>Log out</Button>
                  </>
                  :
                  <>
                    <Link to='/login'>Login</Link>
                    <Link to='/register'>Register</Link>
                  </>
              }
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              {user?.photoURL ?
                <Image
                  style={{ height: '30px' }} roundedCircle
                  src={user?.photoURL}></Image>
                : <FaUser></FaUser>
              }
            </Nav.Link>
            <Toggle toggle={toggle} handleToggleChange={handleToggleChange}></Toggle>
          </Nav>
          <div className='d-lg-none'>
            <LeftSideNav></LeftSideNav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;