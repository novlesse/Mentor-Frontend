import React, { useEffect } from "react";
import { Formik } from "formik";
import { Form, Card, Container } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import * as Yup from "yup";

import Button from "../components/Button";

const initialValues = {
  username: "",
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  username: Yup.string().required().min(3).label("Username"),
  email: Yup.string().required().email("Invalid email address").label("Email"),
  password: Yup.string().required().min(6).label("Password"),
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
          <>
            <Container>
              <Card.Body>
                <Form>
                  <Form.Group controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      type="username"
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
          </>
        );
      }}
    </Formik>
  );
}
