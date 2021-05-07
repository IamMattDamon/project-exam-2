import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { ENQUIRY_URL } from './../../constants/api';
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
  .required("Enter date of arrival"),
  days: yup
    .number()
    .required("Enter days you intend to stay at location")
    .min(1, "At least one night must be booked"),
  people: yup
    .number()
    .required("Enter the amount of people in your company")
    .min(1, "At least one guest must be selected"),
});

export default function Enquiry({ enquiryData }) {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data) {
    data.enquiryform = enquiryData;

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
                    <option>Abels Gate 5B</option>
                    <option>Aarnes Veg 3</option>
                    <option>Askoyvegen 12</option>
                    <option>Bjornsons Gate 27</option>
                    <option>Dokken 5</option>
                    <option>Fortunen 15</option>
                    <option>Furulund 67</option>
                    <option>Hamrevegen 10</option>
                    <option>Lakslia 10</option>
                    <option>Londalen 71</option>
                    <option>Eggum Spa</option>
                    <option>Eidsgaard</option>
                    <option>Neshaugen</option>
                    <option>Steigen</option>
                    <option>Storevika</option>
                    <option>Trollfjord</option>
                    <option>Vallavik</option>
                    <option>Augustin Bryggen</option>
                    <option>Bergen Børs</option>
                    <option>Citybox</option>
                    <option>Grand Terminus</option>
                    <option>Radisson Blu Royal</option>
                    <option>Scandic Ørnen</option>
                    <option>Scandic Torget</option>
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
                        placeholder="mm/dd/yyyy"
                        required
                        pattern="\d{2}-\d{2}-\d{4}"
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
                    <Form.Group controlId="enquiryForm.ControlSelect2">
                      <Form.Label className="enq-label-days">Days</Form.Label>
                      <Form.Control
                        name="days"
                        as="select"
                        placeholder="Days"
                        ref={register}
                      >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                      <option>10</option>
                      <option>11</option>
                      <option>12</option>
                      <option>13</option>
                      <option>14</option>
                      <option>15</option>
                      <option>16</option>
                      <option>17</option>
                      <option>18</option>
                      <option>19</option>
                      <option>20</option>
                      <option>21</option>
                      <option>22</option>
                      <option>23</option>
                      <option>24</option>
                      <option>25</option>
                      <option>26</option>
                      <option>27</option>
                      <option>28</option>
                      </Form.Control>
                      {errors.days && (
                        <span className="text-danger">
                          {errors.days.message}
                        </span>
                      )}
                    </Form.Group>
                  </div>
                  <div className="col-sm-12 col-md-4">
                    <Form.Group controlId="enquiryForm.ControlSelect3">
                      <Form.Label className="enq-label-people">
                        People
                      </Form.Label>
                      <Form.Control
                        name="people"
                        as="select"
                        placeholder="People"
                        ref={register}
                      >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                      <option>10</option>
                      <option>11</option>
                      <option>12</option>
                      <option>13</option>
                      <option>14</option>
                      <option>15</option>
                      <option>16</option>
                      <option>17</option>
                      <option>18</option>
                      <option>19</option>
                      <option>20</option>
                      </Form.Control>
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
