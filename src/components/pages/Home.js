import Heading from "./../layout/Heading";
import Footer from "./../layout/Footer";
import Container from "react-bootstrap/Container";
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
          </div>
        </Container>
      </div>
      <Container>
        <main>
          <section className="mt-5">
            <div className="home-content-container">
              <h2 className="content-heading mb-3 text-center">Featured Accommodations</h2>
              <h3 className="content-subheading text-center">Our recommendations of places to stay in Bergen</h3>
              <FeaturedList />
            </div>
          </section>
          <section>
            <div className="home-content-container">
              <h2 className="content-heading mt-5 mb-3 text-center">Explore Bergen</h2>
              <h3 className="content-subheading text-center">Places to see and explore during your stay in Bergen</h3>
              <ActivitiesList />
            </div>
          </section>
          <section>
            <div className="home-content-container">
              <h2 className="content-heading mt-5 text-center">Public Transport</h2>
              <h3 className="content-subheading text-center">Links to details for public transport in Bergen city</h3>
            </div>
          </section>
        </main>
      </Container>
      </div>
      <Footer />
    </>
  );
}