import Heading from "./../layout/Heading";
import Container from "react-bootstrap/Container";
import Footer from "./../layout/Footer";
import AccommodationList from "./../accommodations/AccommodationList";

export default function Accommodations() {
  return (
    <>
      <div className="content-wrapper">
        <div
          className="accommodations-header-background-image"
          role="img"
          aria-label="houses sea side in Bergen"
        >
          <Container className="accommodations-heading-container">
            <div className="accommodations-heading">
              <Heading title="Accommodation in Bergen" />
              <h3 className="font-family-secondary font-color-white accommodations-subheading">
                Locate your place to stay in Bergen, Norway
              </h3>
            </div>
          </Container>
        </div>

        <AccommodationList />
      </div>
      <Footer />
    </>
  );
}
