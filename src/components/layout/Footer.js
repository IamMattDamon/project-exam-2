import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { FaFacebookSquare, FaPinterestSquare, FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="footer" className="main-footer">
      <Container>
        <Row>
          <div className="col-xs-12 col-sm-6 col-md-3 mt-4">
            <div className="footer-title-container">
              <h4 className="footer-title mt-4">Holidaze</h4>
            </div>
            <div className="footer-link-container">
              <ul className="footer-link-ul">
                <li className="footer-link-li">
                  <div className="footer-link-content">
                    <a href="#." className="footer-link-a">About</a>
                  </div>
                </li>
                <li className="footer-link-li">
                  <div className="footer-link-content">
                    <a href="#." className="footer-link-a">Careers</a>
                  </div>
                </li>
                <li className="footer-link-li">
                  <div className="footer-link-content">
                    <a href="#." className="footer-link-a">Affiliate Info</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-xs-12 col-sm-6 col-md-3 mt-4">
            <div className="footer-title-container">
              <h4 className="footer-title mt-4">Contact</h4>
            </div>
            <div className="footer-link-container">
              <ul className="footer-link-ul">
                <li className="footer-link-li">
                  <div className="footer-link-content">
                    <a href="#." className="footer-link-a">Contact Admin</a>
                  </div>
                </li>
                <li className="footer-link-li">
                  <div className="footer-link-content">
                    <a href="#." className="footer-link-a">Help/FAQ</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-xs-12 col-sm-6 col-md-3 mt-4">
            <div className="footer-title-container">
              <h4 className="footer-title mt-4">Privacy</h4>
            </div>
            <div className="footer-link-container">
              <ul className="footer-link-ul">
                <li className="footer-link-li">
                  <div className="footer-link-content">
                    <a href="#." className="footer-link-a">Terms &amp; Conditions</a>
                  </div>
                </li>
                <li className="footer-link-li">
                  <div className="footer-link-content">
                    <a href="#." className="footer-link-a">Privacy Policy</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-xs-12 col-sm-6 col-md-3 mt-4">
            <div className="footer-title-container">
              <h4 className="footer-title mt-4">Social Media</h4>
            </div>
            <div className="footer-link-container">
              <ul className="footer-link-ul">
                <li className="footer-link-li">
                  <div className="footer-link-content">
                    <span className="mr-2">
                      <FaFacebookSquare className="footer-icons" />
                    </span>
                    <span className="mr-2">
                      <FaInstagramSquare className="footer-icons" />
                    </span>
                    <span className="mr-2">
                      <FaPinterestSquare className="footer-icons" />
                    </span>
                    <span>
                      <FaTwitterSquare className="footer-icons" />
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </Row>
      </Container>
      <div className="footer-copyright-container">
        <p className="footer-copyright-text mt-3 mb-0 text-center">
          Copyright &#169;Holidaze 2021 | A project exam at Noroff by Frode
          Karlsen
        </p>
      </div>
    </footer>
  );
}