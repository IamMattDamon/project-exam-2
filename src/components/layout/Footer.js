import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { FaFacebookSquare, FaPinterestSquare, FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="footer" className="main-footer">
      <Container>
        <Row>
          <div className="col-xs-12 col-sm-6 col-md-3">
            <div className="footer-title-container">
              <h4 className="footer-title">Holidaze</h4>
            </div>
            <div className="footer-link-container">
              <ul className="footer-link-ul">
                <li className="footer-link-li">
                  <div className="footer-link-content">
                    <a href="#">About</a>
                  </div>
                </li>
                <li className="footer-link-li">
                  <div className="footer-link-content">
                    <a href="#">Careers</a>
                  </div>
                </li>
                <li className="footer-link-li">
                  <div className="footer-link-content">
                    <a href="#">Sustainability</a>
                  </div>
                </li>
                <li className="footer-link-li">
                  <div className="footer-link-content">
                    <a href="#">Affiliate Info</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-xs-12 col-sm-6 col-md-3">
            <div className="footer-title-container">
              <h4 className="footer-title">Contact</h4>
            </div>
            <div className="footer-link-container">
              <ul className="footer-link-ul">
                <li className="footer-link-li">
                  <div className="footer-li-content">
                    <a href="#">Contact Admin</a>
                  </div>
                </li>
                <li className="footer-link-li">
                  <div className="footer-li-content">
                    <a href="#">Help/FAQ</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-xs-12 col-sm-6 col-md-3">
            <div className="footer-title-container">
              <h4 className="footer-title">Privacy</h4>
            </div>
            <div className="footer-link-container">
              <ul className="footer-link-ul">
                <li className="footer-link-li">
                  <div className="footer-li-content">
                    <a href="#">Terms &amp; Conditions</a>
                  </div>
                </li>
                <li className="footer-link-li">
                  <div className="footer-li-content">
                    <a href="#">Privacy Policy</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-xs-12 col-sm-6 col-md-3">
            <div className="footer-title-container">
              <h4 className="footer-title">Social Media</h4>
            </div>
            <div className="footer-link-container">
              <ul className="footer-link-ul">
                <li className="footer-link-li">
                  <div className="footer-li-content">
                    <span>
                      <FaFacebookSquare />
                    </span>
                    <span>
                      <FaInstagramSquare />
                    </span>
                    <span>
                      <FaPinterestSquare />
                    </span>
                    <span>
                      <FaTwitterSquare />
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </Row>
      </Container>
    </footer>
  );
}