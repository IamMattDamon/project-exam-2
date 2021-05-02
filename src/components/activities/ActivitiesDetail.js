import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { ACTIVITIES_URL } from "./../../constants/api";
import Card from "react-bootstrap/Card";
import { BiChevronLeftCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import Footer from "./../layout/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Heading from "./../layout/Heading";

function ActivitiesDetail() {
  const [activities, setActivities] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let history = useHistory();
  const { id } = useParams();

  if (!id) {
    history.push("/");
  }

  const url = ACTIVITIES_URL + "/" + id;

  useEffect(
    function () {
      async function fetchData() {
        try {
          const response = await fetch(url);

          if (response.ok) {
            const json = await response.json();
            console.log(json);
            setActivities(json);
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
    return (
      <div className="container font-color-white font-family-secondary">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="container font-color-white font-family-secondary">
        An error occurred: {error}
      </div>
    );
  }

  return (
    <>
      <div className="content-wrapper">
        <div
          className="activities-header-background-image"
          role="img"
          aria-label="houses sea side in Bergen"
        >
          <Container className="activities-detail-container">
            <div className="activities-heading">
              <Heading
                title={activities.name}
                className="font-family-primary font-color-white"
              />
            </div>
            <div className="activities-subheading">
              <h2 className="font-family-secondary font-color-white">
                More information about the {activities.name}
              </h2>
            </div>
          </Container>
        </div>

        <Container className="activities-detail-container">
          <Card className="activities-detail-card">
            <Row className="p-4">
              <div className="col mt-2 d-flex flex-column justify-content-center">
                <div className="activities-detail-img-container">
                  <img
                    src={activities.image.url}
                    alt={activities.image.name}
                    className="activities-detail-image"
                  />
                </div>
                <div className="activities-detail-description">
                  <p className="card-text font-color-dark font-family-secondary p-3">
                    {activities.description}
                  </p>
                </div>
              </div>
              <div className="col">
                <Card.Body className="d-flex flex-column justify-content-center activities-detail-body mt-2">
                  <Card.Title className="mb-1 text-center d-flex">
                    <h2 className="activities-detail-title">{activities.name}</h2>
                  </Card.Title>
                </Card.Body>
                <div className="back-to-link">
                  <Link to={`/`}>
                    <span>
                      <BiChevronLeftCircle />
                    </span>
                    <span>&nbsp;Back to homepage</span>
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

export default ActivitiesDetail;
