import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function ActivitiesItem({ id, name, image }) {
  return (
      <div className="mt-4">
        <Card className="activities-card mr-5 mb-4">
          <div className="text-center">
            <img src={image.url} alt={name} className="activities-card-image"/>
          </div>
          <Card.Body className="d-flex flex-column justify-content-center activities-card-body">
            <Card.Title>
              <h3 className="activities-title text-center mb-0 activities-name">{name}</h3>
            </Card.Title>
          </Card.Body>
          <Link to={`/activities/${id}`} className="text-center">
            <Button className="btn-activities-cta btn-lg">More info</Button>
          </Link>
        </Card>
      </div>
  );
}

ActivitiesItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.array.isRequired,
};

export default ActivitiesItem;
