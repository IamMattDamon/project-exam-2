import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { BASE_URL } from "./../../constants/api";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiChevronLeftCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

function AccommodationDetail() {
  const [accommodation, setAccommodation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let history = useHistory();
  const { param } = useParams();

  if (!param) {
    history.push("/");
  }

  const url = BASE_URL + "/" + param;

  useEffect(
    function () {
      async function fetchData() {
        try {
          const response = await fetch(url);

          if (response.ok) {
            const json = await response.json();
            console.log(json);
            setAccommodation(json);
          } else {
            setError("An error occurred");
          }
        } catch (error) {
          setError(error.toString());
        } finally {
          setLoading(false);
        }
      }
      fetchData();
    },
    [url]
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>An error occurred: {error}</div>;
  }

  return (
    <div className="mt-5 accommodation-detail">
      <div className="container">
        <div className="row">
          <Card className="accommodation-detail-cards">
            <div className="col">
              <img
                className="accommodation-card-image"
                src={accommodation.image}
                alt="accommodation image"
              />
              <div className="accommodation-detail-description">
                <p className="card-text">{accommodation.description}</p>
              </div>
            </div>
            <div className="col">
              <Card.Body className="d-flex justify-content-center">
                <Card.Title className="mb-1 text-center">
                  <h2 className="accommodation-title">{accommodation.name}</h2>
                </Card.Title>
                <Card.Subtitle className="mt-1">
                  <h3 className="accommodation-subtitle">
                    {accommodation.type}
                  </h3>
                </Card.Subtitle>
              </Card.Body>
              <ul className="list-group list-group-flush">
                <li className="list-group-item text-center">
                  {accommodation.bedrooms}&nbsp;Bedrooms
                </li>
                <li className="list-group-item text-center">
                  {accommodation.bathrooms}&nbsp;Bathrooms
                </li>
                <li className="list-group-item text-center">
                  Size:&nbsp;{accommodation.size}&nbsp;&#13217;
                </li>
                <li className="list-group-item text-center">
                  {accommodation.feature_one}
                </li>
                <li className="list-group-item text-center">
                  {accommodation.feature_two}
                </li>
                <li className="list-group-item text-center">
                  {accommodation.feature_three}
                </li>
              </ul>
              <Link to={`/enquiry`}>
                <Button className="btn-cta btn btn-lg">Book today</Button>
              </Link>
              <div className="back-to-link">
                <Link to={`/accommodation`}>
                  <span>
                    <BiChevronLeftCircle />
                  </span>
                  <span>&nbsp;Back to previous page</span>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default AccommodationDetail;