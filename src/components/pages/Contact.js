import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { CONTACT_URL } from "./../../constants/api";
import Alert from "react-bootstrap/Alert";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Heading from "./../layout/Heading";
import Footer from "./../layout/Footer";

const url = CONTACT_URL;

const schema = yup.object().shape({
    full_name: yup
    .string()
    .required("Enter your full name")
    .min(5, "Full name must be at least 5 characters"),
    email: yup
    .string()
    .required("Enter your email address")
    .min(6, "Email address must be at least 6 characters"),
    subject: yup
    .string()
    .required("Enter your subject")
    .min(5, "Subject must be at least 5 characters"),
    message: yup
    .string()
    .required("Enter your message")
    .min(10, "Message must be at least 10 characters long"),
});

export default function Contact({ contactData }) {
    const [submitted, setSubmitted] = useState(false);  

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    });

    async function onSubmit(data) {
        data.contactform = contactData;
        setSubmitted(true);

        try {
            const response = await axios.post(url, data);
            console.log("response", response.data);
        } catch (error) {
            console.log("error", error);
        }
    }

    return (
        <>
          <div className="content-wrapper contact">
              <div
              className="contact-header-background-image"
              role="img"
              aria-label="Bryggen in Bergen city"
              >
              <Container className="contact-form-container">
                <div className="contact-form align-content-center px-5 py-5">
                  <div className="contact-form-heading mb-3">
                      <Heading title="Contact Holidaze" />
                  </div>
                  <div className="contact-form-success">
                  {submitted && <Alert variant="success">Your message has been sent! Average response time is 24 hours</Alert>}
                  </div>
                  <Form noValidate onSubmit={handleSubmit(onSubmit)}>
                    <Row>
                      <Col sm={12} md={6}>
                    <Form.Group controlId="contactForm.ControlInput1">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control
                          name="full_name"
                          placeholder="Enter full name"
                          ref={register}
                        />
                        {errors.full_name && (
                          <span className="text-danger">
                            {errors.full_name.message}
                          </span>
                        )} 
                    </Form.Group>
                    </Col>
                    <Col sm={12} md={6}>
                    <Form.Group controlId="contactForm.ControlInput2">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                          name="email"
                          type="email"
                          placeholder="Enter email address"
                          ref={register}
                          />
                          {errors.email && (
                            <span className="text-danger">
                              {errors.email.message}
                            </span>
                           )}
                    </Form.Group>
                    </Col>
                    </Row>
                    <Form.Group controlId="contactForm.ControlInput3">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control
                          name="subject"
                          type="text"
                          placeholder="Enter your subject"
                          ref={register}
                          />
                          {errors.subject && (
                            <span className="text-danger">
                              {errors.subject.message}
                            </span>
                           )}
                    </Form.Group>
                    <Form.Group controlId="contactForm.TextArea1">
                        <Form.Label>Message</Form.Label>
                        <Form.Control
                        name="message"
                        as="textarea"
                        placeholder="Enter your message here"
                        rows="5"
                        ref={register}
                      />
                      {errors.message && (
                        <span className="text-danger">
                          {errors.message.message}
                        </span>
                      )}
                    </Form.Group>
                    <Button type="submit" className="contact-btn-cta mt-2">
                        Submit message
                    </Button>
                  </Form>

                </div>
              </Container>         
              </div>
          </div>
          <Footer />
        </>
    )

}