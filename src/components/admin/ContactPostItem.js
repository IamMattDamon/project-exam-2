import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiChevronLeftCircle } from "react-icons/bi";

function ContactPostItem({
  id,
  full_name,
  email,
  subject,
  created_at,
  message,
}) {
  return (
    <>
        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                <span>eID#:{id}</span>
                <span className="ml-2">Received:&nbsp;{created_at}</span>
                <span className="ml-2">Subject:&nbsp;{subject}</span>
              </Accordion.Toggle>
              <Card.Header>
                <Accordion.Collapse>
                  <Card.Body>
                    <div className="admin-contact-container container">
                      <div className="admin-contact-content d-flex flex-column justify-content-center px-3 py-3">
                        <div className="admin-contact-header d-flex flex-row">
                          <h3>{email}</h3>
                          <h3>{full_name}</h3>
                        </div>
                        <div className="admin-contact-message">
                          <p>{message}</p>
                        </div>
                      </div>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card.Header>
            </Card.Header>
          </Card>
        </Accordion>
        <div className="back-to-link text-center mt-2">
          <Link to={`/admin`}>
            <span className="backlink-chevron">
              <BiChevronLeftCircle />
            </span>
            <span className="backlink">&nbsp;Back to admin pages</span>
          </Link>
        </div>
    </>
  );
}

ContactPostItem.propTypes = {
  id: PropTypes.number.isRequired,
  full_name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default ContactPostItem;

