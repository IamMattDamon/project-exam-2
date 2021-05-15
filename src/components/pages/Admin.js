import MessageList from "../admin/MessageList";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Heading from "./../layout/Heading";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { HiMail } from "react-icons/hi";
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
                <div className="admin-messages-container">
                    <MessageList />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
      <Footer />
    </>
  );
}
