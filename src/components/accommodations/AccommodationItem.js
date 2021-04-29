import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

function AccommodationItem({
  id,
  name,
  type,
  description,
  bathrooms,
  bedrooms,
  size,
  image,
  feature_one,
  feature_two,
  feature_three,
}) {
  return (
    <div className="mt-4">
      <Card className="accommodation-card mr-4 mb-4">
        <div className="text-center">
        <img src={image[0].url} alt={image[0].name} className="accommodation-card-image" />
        </div>
        <Card.Body className="d-flex flex-column justify-content-center">
          <Card.Title className="mb-1">
            <h2 className="accommodation-title">{name}</h2>
          </Card.Title>
          <Card.Subtitle className="mt-1">
            <h3 className="accommodation-subtitle">{type}</h3>
          </Card.Subtitle>
          <p className="card-text">{description}</p>
        </Card.Body>
        <ul className="list-group list-group-flush">
          <li className="list-group-item text-center">
            {bedrooms}&nbsp;Bedrooms
          </li>
          <li className="list-group-item text-center">
            {bathrooms}&nbsp;Bathrooms
          </li>
          <li className="list-group-item text-center">
            Size:&nbsp;{size}&nbsp;&#13217;
          </li>
          <li className="list-group-item text-center">{feature_one}</li>
          <li className="list-group-item text-center">{feature_two}</li>
          <li className="list-group-item text-center">{feature_three}</li>
        </ul>
        <Link to={`id/${id}`} className="text-center">
          <button className="btn-lg btn btn-cta">
            More details
          </button>
        </Link>
      </Card>
    </div>
  );
}

AccommodationItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.array.isRequired,
  bathrooms: PropTypes.number.isRequired,
  bedrooms: PropTypes.number.isRequired,
  feature_one: PropTypes.string.isRequired,
  feature_two: PropTypes.string.isRequired,
  feature_three: PropTypes.string.isRequired,
};

export default AccommodationItem;