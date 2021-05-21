import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { ENQUIRY_URL } from './../../constants/api';
import Alert from "react-bootstrap/Alert";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Heading from "./../layout/Heading";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Footer from "./../layout/Footer";

const url = ENQUIRY_URL;

const schema = yup.object().shape({
  full_name: yup
    .string()
    .required("Enter your full name")
    .min(5, "Full name must be at least 5 characters"),
  email: yup
    .string()
    .required("Enter your email address")
    .min(6, "Email address must be at least 6 characters"),
  accommodations: yup
  .string()
  .required("Choose your accommodation"),
  date_of_arrival: yup
  .number()
  .required("Enter date of arrival in this format ddmmyyyy")
  .min(8, "Date format needs to be at least 8 figures ddmmyyyy")
  .integer("Must be a whole number")
  .typeError("Must be a whole number"),
  days: yup
  .number()
  .required("Enter the amount of days")
  .integer("Must be a whole number")
  .typeError("Must be a whole number"),
  people: yup
    .number()
    .required("Enter the amount of people")
    .integer("Must be a whole number")
    .typeError("Must be a whole number"),
});

export default function Enquiry({ enquiryData }) {
  const [submitted, setSubmitted] = useState(false);

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data) {
    data.enquiryform = enquiryData;
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
      <div className="content-wrapper enquiry">
        <div
          className="enquiry-header-background-image"
          role="img"
          aria-label="view of bergen city by night from floien"
        >
          <Container className="enquiry-form-container">
            <div className="enquiry-form align-content-center px-5 py-5">
              <div className="enquiry-form-heading mb-3">
                <Heading title="Booking Enquiries" />
              </div>
              <div className="enquiry-form-success">
              {submitted && <Alert variant="success">Your booking has been confirmed! Check your email for booking confirmation details</Alert>}
              </div>
              <Form noValidate onSubmit={handleSubmit(onSubmit)}>
                <Row>
                  <div className="col-sm-12 col-md-6">
                    <Form.Group controlId="enquiryForm.ControlInput1">
                      <Form.Label className="enq-label-fullname">
                        Full Name
                      </Form.Label>
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
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <Form.Group controlId="enquiryForm.ControlInput2">
                      <Form.Label className="enq-label-email">Email</Form.Label>
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
                  </div>
                </Row>
                <Form.Group controlId="enquiryForm.ControlSelect1">
                  <Form.Label className="enq-label-acc">
                    Accommodations
                  </Form.Label>
                  <Form.Control
                    name="accommodations"
                    placeholder="Choose your preferred accommodation"
                    as="select"
                    ref={register}
                  >
                    <option value="Abels_Gate_5B">Abels Gate 5B</option>
                    <option value="Aarnes_Veg_3">Aarnes Veg 3</option>
                    <option value="Askoyvegen_12">Askoyvegen 12</option>
                    <option value="Abels_Gate_5B">Bjornsons Gate 27</option>
                    <option value="Dokken_5">Dokken 5</option>
                    <option value="Fortunen_15">Fortunen 15</option>
                    <option value="Furulund_67">Furulund 67</option>
                    <option value="Hamrevegen_10">Hamrevegen 10</option>
                    <option value="Lakslia_10">Lakslia 10</option>
                    <option value="Londalen_71">Londalen 71</option>
                    <option value="Eggum_Spa">Eggum Spa</option>
                    <option value="Eidsgaard">Eidsgaard</option>
                    <option value="Neshaugen">Neshaugen</option>
                    <option value="Steigen">Steigen</option>
                    <option value="Storevika">Storevika</option>
                    <option value="Trollfjord">Trollfjord</option>
                    <option value="Vallavik">Vallavik</option>
                    <option value="Augustin_Bryggen">Augustin Bryggen</option>
                    <option value="Bergen_Boers">Bergen Børs</option>
                    <option value="Citybox">Citybox</option>
                    <option value="Grand_Terminus">Grand Terminus</option>
                    <option value="Radisson_Blu_Royal">Radisson Blu Royal</option>
                    <option value="Scandic_Oernen">Scandic Oernen</option>
                    <option value="Scandic_Torget">Scandic Torget</option>
                  </Form.Control>
                  {errors.accommodations && (
                    <span className="text-danger">
                      {errors.accommodations.message}
                    </span>
                  )}
                </Form.Group>
                <div className="row">
                  <div className="col-sm-12 col-md-4">
                    <Form.Group controlId="enquiryForm.ControlInput3">
                      <Form.Label className="enq-label-date">
                        Date of Arrival
                      </Form.Label>
                      <Form.Control
                        name="date_of_arrival"
                        placeholder="ddmmyyyy"
                        ref={register}
                      />
                      {errors.date_of_arrival && (
                        <span className="text-danger">
                          {errors.date_of_arrival.message}
                        </span>
                      )}
                    </Form.Group>
                  </div>
                  <div className="col-sm-12 col-md-4">
                    <Form.Group controlId="enquiryForm.ControlInput4">
                      <Form.Label className="enq-label-days">Days</Form.Label>
                      <Form.Control
                        name="days"
                        placeholder="Days"
                        ref={register}
                      />
                      {errors.days && (
                        <span className="text-danger">
                          {errors.days.message}
                        </span>
                      )}
                    </Form.Group>
                  </div>
                  <div className="col-sm-12 col-md-4">
                    <Form.Group controlId="enquiryForm.ControlInput5">
                      <Form.Label className="enq-label-people">
                        People
                      </Form.Label>
                      <Form.Control
                        name="people"
                        placeholder="People"
                        ref={register}
                      />
                      {errors.people && (
                        <span className="text-danger">
                          {errors.people.message}
                        </span>
                      )}
                    </Form.Group>
                  </div>
                </div>
                <Button type="submit" className="enq-btn-cta mt-2">
                  Confirm booking
                </Button>
              </Form>
            </div>
          </Container>
        </div>
      </div>
      <Footer />
    </>
  );
}
