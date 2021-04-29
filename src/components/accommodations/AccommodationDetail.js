import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { ACCOMMODATION_URL } from "./../../constants/api";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiChevronLeftCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

function AccommodationDetail() {
  const [accommodations, setAccommodations] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let history = useHistory();
  const { id } = useParams();

  if (!id) {
    history.push("/");
  }

  const url = ACCOMMODATION_URL + "/" + id;

  useEffect(
    function () {
      async function fetchData() {
        try {
          const response = await fetch(url);

          if (response.ok) {
            const json = await response.json();
            console.log(json);
            setAccommodations(json);
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
              <div
                className="accommodation-card-image"
              >
                {accommodations.image}
              </div>
              <div className="accommodation-detail-description">
                <p className="card-text">{accommodations.description}</p>
              </div>
            </div>
            <div className="col">
              <Card.Body className="d-flex justify-content-center">
                <Card.Title className="mb-1 text-center">
                  <h2 className="accommodation-title">{accommodations.name}</h2>
                </Card.Title>
                <Card.Subtitle className="mt-1">
                  <h3 className="accommodation-subtitle">
                    {accommodations.type}
                  </h3>
                </Card.Subtitle>
              </Card.Body>
              <ul className="list-group list-group-flush">
                <li className="list-group-item text-center">
                  {accommodations.bedrooms}&nbsp;Bedrooms
                </li>
                <li className="list-group-item text-center">
                  {accommodations.bathrooms}&nbsp;Bathrooms
                </li>
                <li className="list-group-item text-center">
                  Size:&nbsp;{accommodations.size}&nbsp;&#13217;
                </li>
                <li className="list-group-item text-center">
                  {accommodations.feature_one}
                </li>
                <li className="list-group-item text-center">
                  {accommodations.feature_two}
                </li>
                <li className="list-group-item text-center">
                  {accommodations.feature_three}
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