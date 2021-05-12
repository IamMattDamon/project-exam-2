import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { HiMail } from "react-icons/hi";
import { AiOutlineMenu } from "react-icons/ai";
import { MdAddCircleOutline } from "react-icons/md";
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
            <div className="admin-links-container d-flex flex-row mt-3 ">
            <Link to="/admin/contact" exact className="admin-link mt-2 mr-2">
                <Button className="admin-btn-cta">
                    <span className="admin-btn-icons"><HiMail /></span>
                    <span className="ml-1">Message inbox</span>
                </Button>
            </Link>
            <Link to="/admin/enquiry" exact className="admin-link mt-2 mr-2">
                <Button className="admin-btn-cta">
                    <span className="admin-btn-icons"><AiOutlineMenu /></span>
                    <span className="ml-1">Enquiries received</span>
                </Button>
            </Link>
            <Link to="/admin/create" exact className="admin-link mt-2">
                <Button className="admin-btn-cta">
                    <span className="admin-btn-icons"><MdAddCircleOutline /></span>
                    <span className="ml-1">Create accommodation</span>
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