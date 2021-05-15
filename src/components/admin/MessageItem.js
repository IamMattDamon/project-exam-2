import PropTypes from "prop-types";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function MessageItem({
  id,
  full_name,
  email,
  subject,
  message,
}) {
  return (
    <>
        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                <span>EID#{id}</span>
                <span className="ml-2">Re:&nbsp;{subject}</span>
              </Accordion.Toggle>
              </Card.Header>
                <Accordion.Collapse>
                  <Card.Body>
                    <div className="admin-contact-container container">
                      <div className="admin-contact-content d-flex flex-column justify-content-center px-3 py-3">
                        <div className="admin-contact-header d-flex flex-row">
                          <span>{email}</span>
                          <span className="ml-2">{full_name}</span>
                        </div>
                        <div className="admin-contact-message">
                          <p>{message}</p>
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

