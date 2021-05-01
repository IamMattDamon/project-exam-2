import Heading from "./../layout/Heading";
import Container from "react-bootstrap/Container";
import Footer from "./../layout/Footer";
import FeaturedList from "./../accommodations/FeaturedList";

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
          <main>
            <section className="mt-5">
              <div className="home-content-container">
                <h2 className="content-header">Featured Accommodations</h2>
                <FeaturedList />
              </div>
            </section>
            <section>
              <div className="home-content-container">
                <h2 className="content-header">Explore Bergen</h2>
              </div>
            </section>
            <section>
              <div className="home-content-container">
                <h2 className="content-header">Public Transport</h2>
              </div>
            </section>
          </main>
        </Container>
      </div>
      <Footer />
    </>
  );
}