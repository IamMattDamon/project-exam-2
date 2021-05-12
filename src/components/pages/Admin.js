import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { BiChevronRightCircle } from "react-icons/bi";
import Heading from "./../layout/Heading";
import Container from "react-bootstrap/Container";
import Footer from "./../../components/layout/Footer";

export default function Admin() {
    return (
        <>
        <div className="content-wrapper admin">
        <div
            className="admin-header-background-image"
            role="img"
            aria-label="Bryggen in Bergen city"
            >
        <Container className="admin-content-container">
            <div className="admin-content align-content-center px-5 py-5">
            <div className="admin-heading">
                <Heading title="Dashboard" />
                <h2 className="admin-subheading">Welcome, Admin!</h2>
            </div>
            <div className="admin-links-container d-flex flex-column mt-3">
            <Link to="/admin/contact" exact className="admin-link mt-2">
                <Button className="admin-btn-cta">
                    <span><BiChevronRightCircle /></span>
                    <span className="ml-1">Read received messages</span>
                </Button>
            </Link>
            <Link to="/admin/enquiry" exact className="admin-link mt-2">
                <Button className="admin-btn-cta">
                    <span><BiChevronRightCircle /></span>
                    <span className="ml-1">Check received enquiries</span>
                </Button>
            </Link>
            <Link to="/admin/create" exact className="admin-link mt-2">
                <Button className="admin-btn-cta">
                    <span><BiChevronRightCircle /></span>
                    <span className="ml-1">Create new accommodation</span>
                </Button>
            </Link>
            </div>
            </div>
        </Container>
        </div>
        </div>
        <Footer />
        </>
    )
}