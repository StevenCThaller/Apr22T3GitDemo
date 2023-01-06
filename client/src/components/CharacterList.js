import React from "react";
import { Container, Table } from "react-bootstrap";
import { useParams } from "react-router-dom";

const CharacterList = () => {
  const { characterType } = useParams();
  return (
    <Container fluid>
      <Table>
        <thead>
          <tr>
            <th>{characterType === "heroes" ? "Hero" : "Villain"} Name </th>
            <th>Alias</th>
            <th>
              {characterType === "heroes" ? "Lives Saved" : "Victim Count"}
            </th>
            <th>Options</th>
          </tr>
        </thead>
      </Table>
    </Container>
  );
};

export default CharacterList;
