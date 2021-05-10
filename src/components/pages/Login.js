import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { LOGIN_URL } from "./../../constants/api";
import Heading from "./../layout/Heading";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import AuthCotext from "./../../context/AuthContext";
import Footer from "./../layout/Footer";

const url = LOGIN_URL;

const schema = yup.object().shape({
    identifier: yup
    .string()
    .required("Enter your email address"),
    password: yup
    .string()
    .required("Enter your password"),
});

export default function Login() {
    const [submitting, setSubmitting] = useState(false);
    const [loginError, setLoginError] = useState(null);

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    });

    const history = useHistory();
    const [auth, setAuth] = useContext(AuthCotext);

    async function onSubmit(data) {
        setSubmitting(true);
        setLoginError(null);
        console.log(data);

        try {
            const response = await axios.post(url, data);
            console.log("response", response.data);
            setAuth(response.data);
            console.log(auth);
            history.push("/admin");
        } catch (error) {
            console.log("error", error);
            setLoginError(error.toString());
        } finally {
            setSubmitting(false);
        }
    }

    return(
        <>
        <div className="content-wrapper login">
            <div
             className="login-header-background-image"
             role="img"
             aria-label="birdseye view of Bergen city"
            >
            <Container className="login-form-container">
              <div className="login-form align-content-center px-5 py-5">
                <div className="login-form-heading mb-3">
                    <Heading title="Admin Login" />
                </div>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    {loginError && <span className="text-danger">Login failed</span>}
                    <fieldset disabled={submitting}>
                        <Form.Group controlId="loginForm.ControlInput1">
                            <Form.Label className="login-label-username">
                                Username
                            </Form.Label>
                            <Form.Control
                              name="identifier"
                              placeholder="Enter your username" 
                              ref={register}
                            />
                            {errors.identifier && 
                            <span className="text-danger">
                            {errors.identifier.message}
                            </span>}
                        </Form.Group>
                        <Form.Group controlId="loginForm.ControlInput2">
                            <Form.Label className="login-label-password">
                                Password
                            </Form.Label>
                            <Form.Control
                              name="password"
                              type="password"
                              placeholder="Enter your password"
                              ref={register}
                            />
                            {errors.password && 
                            <span className="text-danger">
                            {errors.password.message}
                            </span>}
                        </Form.Group>
                        <Button className="btn login-btn-cta mt-2" type="submit">
                            {submitting ? "Logging in" : "Login"}
                        </Button>
                    </fieldset>
                </Form>
                <div className="credentials mt-4">
                    <Accordion defaultActiveKey="0">
                      <div className="card credential-card">
                          <Accordion.Toggle eventKey="0" className="accordion-btn">
                            Username
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="0">
                              <Card.Body>
                                  admin
                              </Card.Body>
                          </Accordion.Collapse>
                      </div>
                      <div className="card credential-card mt-2">
                          <Accordion.Toggle eventKey="1" className="accordion-btn">
                            Password
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="1">
                              <Card.Body>
                                  BananaStand:1337/
                              </Card.Body>
                          </Accordion.Collapse>
                      </div>
                    </Accordion>
                </div>
              </div>
            </Container>    
            </div>
        </div>
        <Footer />
        </>
    )
}