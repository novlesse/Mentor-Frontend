import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Button, Form, Card, Container } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string().required().email("Invalid email address").label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});

export default function Login(props) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
          resetForm();
        }, 1000);
      }}>
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        touched,
        errors,
      }) => {
        return (
          <>
            <Container>
              <Card.Body>
                <Form>
                  <Form.Group controlId="email">
                    <Form.Label>Email: </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="hello@mentor.com"
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
                    <Form.Label>Password: </Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter Password"
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
                  variant="primary"
                  onClick={() => handleSubmit()}
                  disabled={isSubmitting}>
                  {isSubmitting ? (
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                  ) : (
                    "Submit"
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
