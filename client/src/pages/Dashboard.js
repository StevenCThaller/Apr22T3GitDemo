import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, Outlet, useParams } from "react-router-dom";

const commonNames = {
  heroes: {
    singular: "Hero",
    plural: "Heroes",
  },
  villains: {
    singular: "Villain",
    plural: "Villains",
  },
};

const HeroesDashboard = () => {
  const { characterType } = useParams();

  return (
    <Container>
      <Row className="d-flex align-items-center">
        <h1>{commonNames[characterType].plural}</h1>
      </Row>
      <Outlet />
    </Container>
  );
};

export default HeroesDashboard;
