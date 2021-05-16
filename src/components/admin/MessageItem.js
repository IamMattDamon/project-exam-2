import PropTypes from "prop-types";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import { BiChevronDownCircle } from "react-icons/bi";

function MessageItem({
  id,
  full_name,
  email,
  created_at,
  subject,
  message,
}) {
  return (
    <>
        <Accordion className="messages-accordion">
          <Card className="messages-card">
            <Card.Header className="message-dashboard-header">
              <Accordion.Toggle eventKey="0" className="message-accordion-activation">
                <span className="accordion-toggle-header">#{id}</span>
                <span className="ml-2 accordion-toggle-header">Re:&nbsp;{subject}<BiChevronDownCircle className="ml-2"/></span>
              </Accordion.Toggle>
              </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <div className="contactform-dashboard-container container">
                      <div className="contactform-dashboard-content d-flex flex-column justify-content-center px-2 py-2">
                        <div className="contactform-dashboard-time">
                          <h5 className="contactform-dashboard-text mb-1">Received: {created_at}</h5>
                        </div>
                        <div className="contactform-dashboard-header">
                          <h5 className="contactform-dashboard-text mb-1">Email: {email}</h5>
                        </div>
                        <div className="contactform-dashboard-subheader">
                          <h5 className="contactform-dashboard-text mb-1">Name: {full_name}</h5>
                        </div>
                        <div className="contactform-dashboard-message">
                          <p className="contactform-dashboard-text mb-1">{message}</p>
                        </div>
                      </div>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
          </Card>
        </Accordion>
    </>
  );
}

MessageItem.propTypes = {
  id: PropTypes.number.isRequired,
  full_name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default MessageItem;

