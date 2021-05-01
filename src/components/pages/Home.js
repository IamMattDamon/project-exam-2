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
              <h2 className="home-subheading">Get the best deals on accommodation in Bergen</h2>
            </div>
          </Container>
        </div>
        <Container>
          <main>
            <section className="mt-5">
              <div className="home-content-container">
                <h2 className="content-header mb-3">Featured Accommodations</h2>
                <FeaturedList />
              </div>
            </section>
            <section>
              <div className="home-content-container">
                <h2 className="content-header mt-5 mb-3">Explore Bergen</h2>
              </div>
            </section>
            <section>
              <div className="home-content-container">
                <h2 className="content-header mt-3">Public Transport</h2>
              </div>
            </section>
          </main>
        </Container>
      </div>
      <Footer />
    </>
  );
}