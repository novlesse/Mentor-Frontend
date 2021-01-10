import React, { useEffect } from "react";
import { Formik } from "formik";
import { Form, Card, Container, Col } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import * as Yup from "yup";

import Button from "../components/Button";

const initialValues = {
  username: "",
  email: "",
  password: "",
  firstname: "",
  lastname: "",
  businessname: "",
  address: "",
  city: "",
  postalcode: "",
};

const validationSchema = Yup.object({
  username: Yup.string().required().min(3).label("Username"),
  email: Yup.string().required().email("Invalid email address").label("Email"),
  password: Yup.string().required().min(6).label("Password"),
  firstname: Yup.string().required().label("First Name"),
  lastname: Yup.string().required().label("Last Name"),
  businessname: Yup.string().required().label("Buisness Name"),
  address: Yup.string().required().label("Address"),
  city: Yup.string().required().label("City"),
  postalcode: Yup.string().required().label("Postal Code"),
});

export default function Registration(props) {
  useEffect(() => {
    document.title = "Registration";
  }, []);

  const submitForm = (values, { setSubmitting, resetForm }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
      resetForm();
    }, 1000);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={submitForm}>
      {({
        errors,
        dirty,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        isValid,
        touched,
      }) => {
        return (
          <Container>
            <Card.Body>
              <h2 className="mb-4">Registration</h2>
              <Form>
                <Form.Group controlId="username">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    name="username"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.username && errors.username}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.username}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.email && errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.password && errors.password}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Row>
                  <Form.Group as={Col} controlId="firstname">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="firstname"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={touched.firstname && errors.firstname}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.firstname}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} controlId="lastname">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="lastname"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={touched.lastname && errors.lastname}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.lastname}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>

                <Form.Group controlId="businessname">
                  <Form.Label>Business Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="businessname"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.businessname && errors.businessname}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.businessname}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Row>
                  <Form.Group as={Col} controlId="address">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      type="text"
                      name="address"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={touched.address && errors.address}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.address}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} controlId="address2">
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control />
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} controlId="city">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                      type="text"
                      name="city"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={touched.city && errors.city}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.city}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} controlId="postalcode">
                    <Form.Label>Postal Code</Form.Label>
                    <Form.Control
                      type="text"
                      name="postalcode"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={touched.postalcode && errors.postalcode}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.postalcode}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>
              </Form>

              <Button
                onClick={() => handleSubmit()}
                className={dirty && isValid ? "" : "disabled-btn"}
                disabled={!(dirty && isValid) && { isSubmitting }}>
                {isSubmitting ? (
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                ) : (
                  "Register"
                )}
              </Button>
            </Card.Body>
          </Container>
        );
      }}
    </Formik>
  );
}
