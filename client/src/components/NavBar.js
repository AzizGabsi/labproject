import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../slices/userSlice';
import Logo from '../Assets/Logo.png'

const NavBar = () => {
  const  dispatch = useDispatch()
  const {isAuth} = useSelector(state => state.users)
  return (
    <Navbar bg="dark" expand="lg" style={{width: "100%", marginBottom:"15px"}}>
    <Container className='nav-container'>
      {/* <Link to='/' className='navbar-logo'><Navbar.Brand style={{fontSize:"100%", color:"white"}} >GAMIFY</Navbar.Brand></Link> */}
      <img src={Logo} style={{width:"10%"}}></img>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
        <Link to="/" style={{marginRight: "15px", textDecoration: "none", fontSize:"75%", color:"#266abd"}}>Home</Link>
        {/* <Link to="/profile" style={{marginRight: "15px", textDecoration: "none", fontSize:"75%", color:"#266abd"}}>Profile</Link> */}
          {/* <Link to="/contact" style={{marginRight: "15px", textDecoration: "none", fontSize:"75%", color:"#266abd"}}>Contact</Link> */}
          { (!isAuth) ? <>
            <Link to="/login" style={{marginRight: "15px", textDecoration: "none", fontSize:"75%", color:"#266abd"}}>Login</Link>
          <Link to="/register" style={{marginRight: "15px", textDecoration: "none", fontSize:"75%", color:"#266abd"}}>Register</Link>
          </>
        :  <>
        
        <Link to="/profile" style={{marginRight: "15px", textDecoration: "none", fontSize:"75%", color:"#266abd"}}>Profile</Link>
        <Link to="/login" onClick={() => dispatch(logout())} style={{marginRight: "15px", textDecoration: "none",fontSize:"75%", color:"#266abd"}} >Logout</Link>
        <Link to="/createPost" style={{marginRight: "15px",marginLeft: "30vw", textDecoration: "none", fontSize:"75%", color:"#266abd"}}>Create a New Post</Link>
        </>  
        }
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavBar