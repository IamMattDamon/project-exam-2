import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { FaFacebookSquare, FaPinterestSquare, FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="footer" className="main-footer">
      <Container>
        <Row>
          <div className="col-sm-12 col-md-3 mt-4 footer-col">
              <h4 className="footer-title mt-4">Holidaze</h4>
              <ul className="footer-link-ul">
                <li className="footer-link-li">
                  <div className="footer-link-content text-center">
                    <a href="#." className="footer-link-a">About</a>
                  </div>
                </li>
                <li className="footer-link-li">
                  <div className="footer-link-content text-center">
                    <a href="#." className="footer-link-a">Careers</a>
                  </div>
                </li>
                <li className="footer-link-li">
                  <div className="footer-link-content text-center">
                    <a href="#." className="footer-link-a">Affiliate Info</a>
                  </div>
                </li>
              </ul>
          </div>

          <div className="col-sm-12 col-md-3 mt-4 footer-col">
              <h4 className="footer-title mt-4">Contact</h4>
              <ul className="footer-link-ul">
                <li className="footer-link-li">
                  <div className="footer-link-content text-center">
                    <a href="#." className="footer-link-a">Contact Admin</a>
                  </div>
                </li>
                <li className="footer-link-li">
                  <div className="footer-link-content text-center">
                    <a href="#." className="footer-link-a">Help/FAQ</a>
                  </div>
                </li>
              </ul>
          </div>

          <div className="col-sm-12 col-md-3 mt-4 footer-col">
              <h4 className="footer-title mt-4">Privacy</h4>
              <ul className="footer-link-ul">
                <li className="footer-link-li">
                  <div className="footer-link-content text-center">
                    <a href="#." className="footer-link-a">Terms &amp; Conditions</a>
                  </div>
                </li>
                <li className="footer-link-li">
                  <div className="footer-link-content text-center">
                    <a href="#." className="footer-link-a">Privacy Policy</a>
                  </div>
                </li>
              </ul>
          </div>

          <div className="col-sm-12 col-md-3 mt-4 footer-col">
              <h4 className="footer-title mt-4">Social Media</h4>
              <ul className="footer-link-ul">
                <li className="footer-link-li">
                  <div className="footer-link-content text-center">
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
        </Row>
      </Container>
      <div className="footer-copyright-container mt-3">
        <p className="footer-copyright-text mb-0 text-center">
          &#169;Code Karlsen 2021&nbsp;
        </p>
        <p className="footer-copyright-text mb-0 text-center">
          Project Exam at Noroff by Frode Karlsen&nbsp;
        </p>
      </div>
    </footer>
  );
}