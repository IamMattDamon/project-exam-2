import Heading from "./../layout/Heading";
import Container from "react-bootstrap/Container";
import AccommodationList from "./../accommodations/AccommodationList";
import Footer from "./../layout/Footer";

export default function Accommodations() {
    return (
        <>
            <div className="content-wrapper">
            <div
              className="accommodations-header-background-image"
              role="img"
              aria-label="houses sea side in Bergen"
            >
              <Container>
                <div className="home-heading">
                  <Heading title="Accommodation in Bergen" />
                </div>
              </Container>
            </div>
            <Container>
            <div className="section-header">
              <h2>Find Accommodations</h2>
            </div>
            </Container>
            <AccommodationList />

            </div>
            <Footer />
        </>
    )
}
