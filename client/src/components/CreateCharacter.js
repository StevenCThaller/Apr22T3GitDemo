import React from "react";
import { useParams } from "react-router-dom";
import CreateHero from "./CreateHero";
import CreateVillain from "./CreateVillain";

const CreateCharacter = () => {
  const { characterType } = useParams();
  return <>{characterType === "heroes" ? <CreateHero /> : <CreateVillain />}</>;
};

export default CreateCharacter;
