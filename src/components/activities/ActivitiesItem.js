import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button";

function ActivitiesItem({ id, name, description, image }) {
  return (
    <Container className="home-activities-container">
      <Row>
        <Col sm={12}>
          <div id="activityCarousel" class="carousel slide w-100" data-ride="carousel">
            <div className="carousel-inner w-100" role="cardbox">
              <Carousel.Item className="active">
                <Container>
                    <Col md={4}>
                      <Card className="activities-carousel-card">
                        <div className="activities-image-container">
                          <img
                            src={image.url}
                            alt={name}
                            className="activities-card-image"
                          />
                        </div>
                        <Card.Body className="">
                          <h3 className="activities-card-title">{name}</h3>
                          <p className="activities-description">
                            {description}
                          </p>
                        </Card.Body>
                        <Link to={`/activities/${id}`} className="text-center">
                          <Button className="btn-cta btn-lg">More info</Button>
                        </Link>
                      </Card>
                    </Col>
                </Container>
              </Carousel.Item>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

ActivitiesItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.array.isRequired,
};

export default ActivitiesItem;
