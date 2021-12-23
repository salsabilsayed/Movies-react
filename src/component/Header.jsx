import React, { useContext } from "react";
import { Link,useNavigate } from "react-router-dom";
import AuthContext from "../Auth/auth-context";
import { Navbar, Container, Nav } from "react-bootstrap";
import axios from "axios";

import './Header.css'

const Header = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  let navigate = useNavigate();

  const logOutHandler = () =>{
    const config = {
      headers: { Authorization: `Bearer ${authCtx.token}` }
  };
    axios.delete('https://task-app-nodee.herokuapp.com/logout',config)
    .then(res =>{
      localStorage.removeItem('token')
      authCtx.logout();
    }).catch(e =>{
      console.log(e);
    })
  }
  
  return (
    <Navbar className="nav">
      <Container>
        <h2 className="title">Search Movies</h2>
        <Nav className="ml-auto">
          {!isLoggedIn && <Nav.Link>
            <Link to="signup" className="link">Register</Link>
          </Nav.Link>}

          {!isLoggedIn && <Nav.Link>
            <Link to="login" className="link">Login</Link>
          </Nav.Link>}

          {isLoggedIn && <Nav.Link>
            <Link to="login" onClick={logOutHandler} className="link">Logout</Link>
          </Nav.Link>}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
