import React from "react";
import styled from "styled-components";

export default function CharacterCard({ character }) {
  return (
    <Card>
      <h2>{character.name}</h2>
      <p>Species: {character.species}</p>
      <p>Origin: {character.origin.name}</p>
      <p>Status: {character.status}</p>
      <p>Location: {character.location.name}</p>
      <p>Appears in {character.episode.length} episodes</p>
    </Card>
  );
}

const Card = styled.div`
  padding: 2rem;
  border-radius: 3px;
  background-color: #14abde;
  display: inline-block;
  width: calc(33% - 2rem);
  margin: 1rem;
  box-shadow: 5px 5px 6px rgba(0, 0, 0, 0.25);

  &:nth-of-type(2n) {
    background-color: #14de57;
  }

  h2 {
    font-size: 24px;
  }

  p {
    font-size: 16px;
  }
`;
