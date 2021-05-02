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
        <Container className="accommodations-content-container">
          <div className="accommodations-heading">
            <Heading
              title="Accommodation in Bergen"
              className="font-family-primary font-color-white"
            />
          </div>
          <div className="accommodations-subheading">
            <h2 className="font-family-secondary font-color-white">
              Find the right spot for you and yours
            </h2>
          </div>
        </Container>
      </div>

      <AccommodationList />
      </div>
      <Footer />
    </>
  );
}
