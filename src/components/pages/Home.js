import Heading from "./../layout/Heading";
import Footer from "./../layout/Footer";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { BiChevronLeftCircle } from "react-icons/bi";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import FeaturedList from "./../accommodations/FeaturedList";
import ActivitiesList from "./../activities/ActivitiesList";

export default function Home() {
  return (
    <>
      <div className="content-wrapper">
        <div
          className="home-header-background-image"
          role="img"
          aria-label="bryggen in bergen city center"
        >
          <Container className="home-heading-container">
            <div className="home-heading">
              <Heading title="Holidaze in Bergen" />
              <h2 className="home-subheading">
                Get the best deals on accommodation
              </h2>
              <Link to={`/accommodations`}>
                <Button className="btn-home-cta mt-2">Find your place</Button>
              </Link>
            </div>
          </Container>
        </div>
        <Container>
          <main>
            <section className="mt-5">
              <div className="home-content-container">
                <h2 className="content-heading mb-2 text-center">
                  Featured Accommodations
                </h2>
                <h3 className="content-subheading text-center">
                  Our recommendations of places to stay in Bergen
                </h3>
                <FeaturedList />
              </div>
            </section>
            <section className="mg-top-100">
              <div className="home-content-container">
                <h2 className="content-heading mt-5 mb-2 text-center">
                  Explore Bergen
                </h2>
                <h3 className="content-subheading text-center">
                  Places to see and explore during your stay in Bergen
                </h3>
                <ActivitiesList />
              </div>
            </section>

            <section className="mg-top-100">
                <Container className="home-jumbotron-container mr-5">
                  <Jumbotron>
                  <h1 className="text-center jumbotron-heading mb-2">The Bergen Card</h1>
                  <p className="jumbotron-text">
                    Available in 24, 48, 72 and 96 hour packages. The Bergen card includes
                    travel on Bergen's busses and light railway. You will also get exclusive
                    discounts on tours, restaurants, parking, bike hire and entries
                    to cultural events and venues. A good deal for tourists in Bergen! 
                  </p>
                  <a                           
                    target="_blank"
                    href="https://en.visitbergen.com/bergen-card"
                    rel="noreferrer"
                    className="ext-link-a">
                  <span>
                    <BiChevronLeftCircle />
                  </span>
                  <span>Find out more</span>
                  </a>
                  </Jumbotron>
                </Container>
            </section>

            <section className="mg-top-100">
              <div className="home-content-container mb-5 mr-5">
                <h2 className="content-heading mt-5 text-center">
                  Public Transport
                </h2>
                <h3 className="content-subheading text-center">
                  Useful links for public transport in Bergen
                </h3>
                <Container className="py-2 px-4 transport-container mt-4">
                  <div className="d-flex flex-wrap justify-content-center">
                    <Row className="transport-list">
                      <Col sm={4}>
                        <a
                          target="_blank"
                          href="https://www.skyss.no/"
                          rel="noreferrer"
                          className="ext-link-a"
                        >
                          <span>
                            <BiChevronLeftCircle />
                          </span>
                          <span>&nbsp;Skyss</span>
                        </a>
                      </Col>
                      <Col sm={4}>
                        <a
                          target="_blank"
                          href="https://avinor.no/en/airport/bergen-airport/to-and-from-the-airport/bus-and-taxi/bus"
                          rel="noreferrer"
                          className="ext-link-a"
                        >
                          <span>
                            <BiChevronLeftCircle />
                          </span>
                          <span>&nbsp;Airport Bus</span>
                        </a>
                      </Col>
                      <Col sm={4}>
                        <a
                          target="_blank"
                          href="https://www.nor-way.no/en/#/?step=2"
                          rel="noreferrer"
                          className="ext-link-a"
                        >
                          <span>
                            <BiChevronLeftCircle />
                          </span>
                          <span>&nbsp;Coast Bus</span>
                        </a>
                      </Col>
                    </Row>
                  </div>
                  <div className="d-flex flex-wrap justify-content-center">
                    <Row className="transport-list">
                      <Col sm={4}>
                        <a
                          target="_blank"
                          href="https://www.floyen.no/en"
                          rel="noreferrer"
                          className="ext-link-a"
                        >
                          <span>
                            <BiChevronLeftCircle />
                          </span>
                          <span>&nbsp;Fløibanen</span>
                        </a>
                      </Col>
                      <Col sm={4}>
                        <a
                          target="_blank"
                          href="https://www.norled.no/en/expressboat/maps-and-schedules/"
                          rel="noreferrer"
                          className="ext-link-a"
                        >
                          <span>
                            <BiChevronLeftCircle />
                          </span>
                          <span>&nbsp;Norled</span>
                        </a>
                      </Col>
                      <Col sm={4}>
                        <a
                          target="_blank"
                          href="https://www.hurtigruten.no/havner/bergen/"
                          rel="noreferrer"
                          className="ext-link-a"
                        >
                          <span>
                            <BiChevronLeftCircle />
                          </span>
                          <span>&nbsp;Hurtigruten</span>
                        </a>
                      </Col>
                    </Row>
                  </div>
                </Container>
              </div>
            </section>
          </main>
        </Container>
      </div>
      <Footer />
    </>
  );
}