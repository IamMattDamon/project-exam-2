import PropTypes from "prop-types";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import { FaBarcode } from "react-icons/fa";

function EnquiryItem({
  created_at,
  full_name,
  email,
  accommodations,
  date_of_arrival,
  days,
  people,
}) {
  return (
    <>
      <Accordion className="enquiries-accordion">
        <Card className="enquiries-card">
          <Card.Header className="enquiry-dashboard-header">
            <Accordion.Toggle
              eventKey="0"
              className="enquiry-accordion-activation"
            >
              <span className=""><FaBarcode /></span>
              <span className="ml-2 accordion-toggle-header">
                {created_at}
              </span>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <div className="enquiryform-dashboard-container container">
                <div className="enquiryform-dashboard-content d-flex flex-column justify-content-between px-2 py-2">
                <div className="enquiryform-dashboard-email">
                    <h5 className="enquiryform-dashboard-text mb-1">
                      Email: {email}
                    </h5>
                  </div>
                  <div className="enquiryform-dashboard-name">
                    <h5 className="enquiryform-dashboard-text mb-1">
                      Name: {full_name}
                    </h5>
                  </div>
                  <div className="enquiryform-dashboard-accommodation">
                    <h5 className="enquiryform-dashboard-text mb-1">
                      Property: {accommodations}
                    </h5>
                  </div>
                  <div className="enquiryform-dashboard-arrivaldate">
                    <h5 className="enquiryform-dashboard-text mb-1">
                      Arrival: {date_of_arrival}
                    </h5>
                  </div>
                  <div className="enquiryform-dashboard-days">
                    <h5 className="enquiryform-dashboard-text mb-1">
                      Days: {days}
                    </h5>
                  </div>
                  <div className="enquiryform-dashboard-people">
                    <h5 className="enquiryform-dashboard-text mb-1">
                      People: {people}
                    </h5>
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

EnquiryItem.propTypes = {
  id: PropTypes.number.isRequired,
  full_name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  accommodations: PropTypes.string.isRequired,
  date_of_arrival: PropTypes.string.isRequired,
  days: PropTypes.number.isRequired,
  people: PropTypes.number.isRequired,
};

export default EnquiryItem;