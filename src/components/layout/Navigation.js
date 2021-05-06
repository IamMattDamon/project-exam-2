import { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import AuthContext from "./../../context/AuthContext";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import logo from "./../../images/holidaze_logo_darkbg.png";

export default function Navigation() {
  const [auth, setAuth] = useContext(AuthContext);

  const history = useHistory();
  console.log(auth);

  function logout() {
    setAuth(null);
    history.push("/");
  }

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>
          <img src={logo} alt="holidaze logo" className="nav-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink to="/" exact className="nav-link">
              Home
            </NavLink>
            <NavLink to="/accommodations" exact className="nav-link">
              Accommodations
            </NavLink>
            <NavLink to="/enquiry" exact className="nav-link">
              Enquiry
            </NavLink>
            <NavLink to="/contact" exact className="nav-link">
              Contact
            </NavLink>
            {auth ? (
              <>
                <NavLink to="/admin" exact className="nav-link">
                  Admin
                </NavLink>
                <button
                  onClick={logout}
                  className="btn-sm btn-primary ml-lg-3 py-0 mr-auto mt-3 mt-lg-0 logout-btn"
                >
                  Log out
                </button>
              </>
            ) : (
              <NavLink to="/login" exact className="nav-link">
                Login
              </NavLink>
            )}
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}
