import Heading from "./../layout/Heading";
import Container from "react-bootstrap/Container";
import Footer from "./../../components/layout/Footer";

export default function Admin() {
    return (
        <>
        <Container>
            <div className="mt-5">
                <Heading title="Dashboard" />
                <h2 className="admin-subheading">Welcome, Admin!</h2>
            </div>
            <div className="admin-links-container">
            </div>
            
            <p>Remember, there is always money in the banana stand!</p>
        </Container>
            <Footer />
        </>
    )
}