import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { ACCOMMODATION_URL } from "./../../constants/api";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiChevronLeftCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import Footer from "./../layout/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Heading from "./../layout/Heading";

function AccommodationDetail() {
  const [accommodation, setAccommodation] = useState(null);
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
    <>
      <div className="content-wrapper">
        <div
          className="accommodations-header-background-image"
          role="img"
          aria-label="houses sea side in Bergen"
        >
          <Container className="accommodations-content-container">
            <div className="accommodations-heading">
              <Heading
                title="Accommodation Details"
                className="font-family-primary font-color-white"
              />
            </div>
            <div className="accommodations-subheading">
              <h2 className="font-family-secondary font-color-white">
                Details about your accommodation in Bergen
              </h2>
            </div>
          </Container>
        </div>
          <Container className="accommodation-detail-container">
              <Card className="accommodation-detail-card">
              <Row className="p-4">
                <div className="col mt-2 d-flex flex-column justify-content-center">
                  <div className="accommodation-detail-img-container">
                    <img
                      src={accommodation.image[0].url}
                      alt={accommodation.image[0].name}
                      className="accommodation-detail-image"
                    />
                  </div>
                  <div className="accommodation-detail-description">
                    <p className="card-text font-color-dark font-family-secondary p-3">{accommodation.description}</p>
                  </div>
                </div>
                <div className="col">
                  <Card.Body className="d-flex flex-column justify-content-center accommodation-detail-body mt-2">
                    <Card.Title className="mb-1 text-center d-flex">
                      <h2 className="accommodation-detail-title">
                        {accommodation.name}
                      </h2>
                    </Card.Title>
                    <Card.Subtitle>
                      <h3 className="accommodation-detail-subtitle">
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
                    <Link to={`/accommodations`}>
                      <span>
                        <BiChevronLeftCircle />
                      </span>
                      <span>&nbsp;Back to previous page</span>
                    </Link>
                  </div>
                </div>
                </Row>
              </Card>
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default AccommodationDetail;