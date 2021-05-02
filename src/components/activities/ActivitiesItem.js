import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function ActivitiesItem({ id, name, description_short, description_long, image }) {
  return (
      <div className="mt-4">
        <Card className="activities-card mr-5 mb-4">
          <div className="text-center">
            <img src={image.url} alt={name} className="activities-card-image"/>
          </div>
          <Card.Body className="d-flex flex-column justify-content-center activities-card-body">
            <Card.Title>
              <h3 className="activities-title text-center mb-0">{name}</h3>
            </Card.Title>
            <Card.Subtitle className="p-1 mb-0">
              <p className="activities-subtitle mb-0">{description_short}</p>
            </Card.Subtitle>
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
  description_short: PropTypes.string.isRequired,
  description_long: PropTypes.string.isRequired,
  image: PropTypes.array.isRequired,
};

export default ActivitiesItem;
