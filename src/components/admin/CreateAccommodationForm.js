import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from "axios";
import { ACCOMMODATION_URL } from "../../constants/api";
import AuthContext from "../../context/AuthContext";
import Alert from "react-bootstrap/Alert";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const url = ACCOMMODATION_URL;

const schema = yup.object().shape({
    name: yup
    .string()
    .required("Enter name or address e.g Maribakken 15")
    .min(3, "Accommodation name must be at least 3 characters"),
    type: yup
    .string()
    .required("Enter accommodation type e.g cabin or penthouse")
    .min(4, "Type must be at least 4 characters long"),
    image: yup
    .mixed()
    .test("imageUploaded", "Upload a JPEG file to continue", (value) => !!value.length),
    description: yup
    .string()
    .required("Enter a description 50-400 characters")
    .min(50, "Description must contain at least 50 characters")
    .max(400, "Description cannot contain more than 400 characters"),
    bedrooms: yup
    .number()
    .required("Enter the amount of bedrooms")
    .integer("Must be a whole number")
    .typeError("Must be a whole number"),
    bathrooms: yup
    .number()
    .required("Enter the amount of bathrooms")
    .integer("Must be a whole number")
    .typeError("Must be a whole number"),
    size: yup
    .number()
    .required("Enter size of accommodation (m2)")
    .integer("Must be a whole number")
    .typeError("Must be a whole number"),
    feature_one: yup
    .string()
    .required("Enter feature e.g Wi-Fi"),
    feature_two: yup
    .string()
    .required("Enter feature e.g parking"),
    feature_three: yup
    .string()
    .required("Enter feature e.g luxorious"),
    price: yup
    .number()
    .required("Enter cost per night in NOK")
    .integer("Must be a whole number")
    .typeError("Must be a whole number"),
});

export default function CreateAccommodationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [file, setFile] = useState(null);
  const [auth] = useContext(AuthContext);

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const sortInputChange = (event) => {
    setFile(event.target.files[0]);
  };

  async function onSubmit(data) {
    console.log(data);
    
    let formData = new FormData();
    delete data["image"];
    
    formData.append(`files.image`, file, file.name);
    formData.append("data", JSON.stringify(data));
    
    const token = auth.jwt;
    setSubmitted(true);
    
    try {
      axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
      const response = await axios.post(url, formData);
      console.log("response", response.data);
    } catch (error) {
      console.log("error", error);
    }
  }

  return (
    <>
    <Container>
      <div className="create-form-success">
        {submitted && (
          <Alert variant="success">
            Your new accommodation has been successfully created!
          </Alert>
        )}
      </div>
      <Form noValidate onSubmit={handleSubmit(onSubmit)}>
      <Form.Group controlId="createForm.ControlTextarea1">
          <Form.Label className="create-label-image">Select image</Form.Label>
          <Form.Control
            name="image"
            type="file"
            ref={register}
            onChange={sortInputChange}
          />
          {errors.image && (
            <span className="text-danger">{errors.image.message}</span>
          )}
        </Form.Group>
        <Row>
        <Col sm={12} md={6}>
        <Form.Group controlId="createForm.ControlInput1">
          <Form.Label className="create-label-name">Address/name</Form.Label>
          <Form.Control
            name="name"
            placeholder="Enter accommodation name"
            ref={register}
          />
          {errors.name && (
            <span className="text-danger">{errors.name.message}</span>
          )}
        </Form.Group>
        </Col>
        <Col sm={12} md={6}>
        <Form.Group controlId="createForm.ControlInput2">
          <Form.Label className="create-label-type">Type</Form.Label>
          <Form.Control
            name="type"
            placeholder="Enter type of accommodation"
            ref={register}
          />
          {errors.type && (
            <span className="text-danger">{errors.type.message}</span>
          )}
        </Form.Group>
        </Col>
        </Row>
        <Row>
        <Col sm={12} md={3}>
        <Form.Group controlId="createForm.ControlInput4">
          <Form.Label className="create-label-bedrooms">Bedrooms</Form.Label>
          <Form.Control
            name="bedrooms"
            placeholder="Bedrooms"
            ref={register}
          />
          {errors.bedrooms && (
            <span className="text-danger">{errors.bedrooms.message}</span>
          )}
        </Form.Group>
        </Col>
        <Col sm={12} md={3}>
        <Form.Group controlId="createForm.ControlInput5">
          <Form.Label className="create-label-bathrooms">Bathrooms</Form.Label>
          <Form.Control
            name="bathrooms"
            placeholder="Bathrooms"
            ref={register}
          />
          {errors.bathrooms && (
            <span className="text-danger">{errors.bathrooms.message}</span>
          )}
        </Form.Group>
        </Col>
        <Col sm={12} md={3}>
        <Form.Group controlId="createForm.ControlInput6">
          <Form.Label className="create-label-size">Size</Form.Label>
          <Form.Control name="size" placeholder="Size" ref={register} />
          {errors.size && (
            <span className="text-danger">{errors.size.message}</span>
          )}
        </Form.Group>
        </Col>
        <Col sm={12} md={3}>
        <Form.Group controlId="createForm.ControlInput10">
          <Form.Label className="create-label-price">Price</Form.Label>
          <Form.Control
            name="price"
            placeholder="Per night (NOK)"
            ref={register}
          />
          {errors.price && (
            <span className="text-danger">{errors.price.message}</span>
          )}
        </Form.Group>
        </Col>
        </Row>
        <Row>
        <Col sm={12} md={4}>
        <Form.Group controlId="createForm.ControlInput7">
          <Form.Label className="create-label-feature">Feature one</Form.Label>
          <Form.Control
            name="feature_one"
            placeholder="Wi-Fi/Parking"
            ref={register}
          />
          {errors.feature_one && (
            <span className="text-danger">{errors.feature_one.message}</span>
          )}
        </Form.Group>
        </Col>
        <Col sm={12} md={4}>
        <Form.Group controlId="createForm.ControlInput8">
          <Form.Label className="create-label-feature">Feature two</Form.Label>
          <Form.Control
            name="feature_two"
            placeholder="Enter feature"
            ref={register}
          />
          {errors.feature_two && (
            <span className="text-danger">{errors.feature_two.message}</span>
          )}
        </Form.Group>
        </Col>
        <Col sm={12} md={4}>
        <Form.Group controlId="createForm.ControlInput9">
          <Form.Label className="create-label-feature">
            Feature three
          </Form.Label>
          <Form.Control
            name="feature_three"
            placeholder="Enter feature"
            ref={register}
          />
          {errors.feature_three && (
            <span className="text-danger">{errors.feature_three.message}</span>
          )}
        </Form.Group>
        </Col>
        </Row>
        <Form.Group controlId="createForm.ControlTextarea1">
          <Form.Label className="create-label-description">
            Description
          </Form.Label>
          <Form.Control
            name="description"
            as="textarea"
            placeholder="Type description (50 to 400 characters)"
            rows="5"
            ref={register}
          />
          {errors.description && (
            <span className="text-danger">{errors.description.message}</span>
          )}
        </Form.Group>
        <Button type="submit" className="create-btn-cta">
          Submit registration
        </Button>
      </Form>
      </Container>
    </>
  );
}

