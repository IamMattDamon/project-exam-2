import Heading from "./../layout/Heading";
import Container from "react-bootstrap/Container";
import Footer from "./../layout/Footer";

export default function Home() {
    return (
      <>
        <div className="content-wrapper">
            <div
              className="home-header-background-image"
              role="img"
              aria-label="bryggen in bergen city center"
            >
              <Container>
                <div className="home-heading">
                  <Heading title="Accommodation in Bergen" />
                </div>
              </Container>
            </div>
          <Container>
            <div className="section-header">
              <h2>Featured Accommodations</h2>
            </div>
            <div className="section-header">
              <h2>Explore Bergen</h2>
            </div>
            <div className="section-header">
              <h2>Public Transport</h2>
            </div>
          </Container>
        </div>
        <Footer />
      </>
    );
}