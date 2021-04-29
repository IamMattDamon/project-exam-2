import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import AuthContext from "./../../context/AuthContext";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
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
      <div className="container-fluid">
        <Navbar.Brand>
          <img src={logo} alt="holidaze logo" className="nav-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/" exact className="nav-link">
              Home
            </Link>
            <Link to="/accommodations" exact className="nav-link">
              Accommodations
            </Link>
            <Link to="/enquiry" exact className="nav-link">
              Enquiry
            </Link>
            <Link to="/contact" exact className="nav-link">
              Contact
            </Link>
            {auth ? (
              <>
                <Link to="/admin" exact className="nav-link">
                  Admin
                </Link>
                <button
                  onClick={logout}
                  className="btn-sm btn-primary ml-lg-3 py-0 mr-auto mt-3 mt-lg-0 logout-btn"
                >
                  Log out
                </button>
              </>
            ) : (
              <Link to="/login" exact className="nav-link">
                Login
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
