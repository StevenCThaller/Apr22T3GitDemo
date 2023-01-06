import React from "react";
import { Container, Form, Row } from "react-bootstrap";

const CreateHero = () => {
  return (
    <Container className="d-flex w-50 flex-column">
      <h2>Create a new Hero</h2>
      <Form onSubmit={() => ""}>
        <Row>
          <Form.Group xs={12} md={6} className="mb-2">
            <Form.Label>Hero Name</Form.Label>
            <Form.Control type="text" name="name" autoComplete="off" />
          </Form.Group>
        </Row>
      </Form>
    </Container>
  );
};

export default CreateHero;
