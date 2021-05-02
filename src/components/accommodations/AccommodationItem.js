import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

function AccommodationItem({
  id,
  name,
  type,
  bathrooms,
  bedrooms,
  size,
  image,
}) {
  return (
    <div className="mt-4">

      <Card className="accommodation-card mr-5 mb-4">
        <div className="text-center">
        <img src={image[0].url} alt={image[0].name} className="accommodation-card-image" />
        </div>
        <Card.Body className="d-flex flex-column justify-content-center dark-bg">
          <Card.Title>
            <h3 className="accommodation-title text-center">{name}</h3>
          </Card.Title>
          <Card.Subtitle>
            <h4 className="accommodation-subtitle text-center">{type}</h4>
          </Card.Subtitle>
        </Card.Body>
        <ul className="list-group list-group-flush">
          <li className="list-group-item text-center accommodation-background-fuchsia font-color-white">
            {bedrooms}&nbsp;Bedrooms
          </li>
          <li className="list-group-item text-center accommodation-background-fuchsia font-color-white">
            {bathrooms}&nbsp;Bathrooms
          </li>
          <li className="list-group-item text-center accommodation-background-fuchsia font-color-white">
            Size:&nbsp;{size}&nbsp;&#13217;
          </li>
        </ul>
        <Link to={`/accommodations/${id}`} className="text-center">
          <button className="btn-lg btn accommodation-detail-btn">
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
  image: PropTypes.array.isRequired,
  bathrooms: PropTypes.number.isRequired,
  bedrooms: PropTypes.number.isRequired,
};

export default AccommodationItem;