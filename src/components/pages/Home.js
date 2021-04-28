import Heading from "./../layout/Heading";
import Container from "react-bootstrap/Container";

export default function Home() {
    return (
      <>
        <div className="content-wrapper">
          <div className="header-image-overlay">
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
      </>
    );
}