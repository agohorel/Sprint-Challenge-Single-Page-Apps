import React from "react";
import styled, { keyframes } from "styled-components";

export default function CharacterCard({ character }) {
  return (
    <Card>
      <Avatar
        src={`https://rickandmortyapi.com/api/character/avatar/${character.id}.jpeg`}
      ></Avatar>
      <h2>{character.name}</h2>
      <p>Species: {character.species}</p>
      <p>Origin: {character.origin.name}</p>
      <p>Status: {character.status}</p>
      <p>Location: {character.location.name}</p>
      <p>Appears in {character.episode.length} episodes</p>
    </Card>
  );
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const Card = styled.div`
  padding: 2rem;
  border-radius: 3px;
  background-color: #14abde;
  display: inline-block;
  width: calc(25% - 2rem);
  margin: 1rem;
  box-shadow: 5px 5px 6px rgba(0, 0, 0, 0.25);
  animation: ${fadeIn} 1s ease-out forwards;

  &:nth-of-type(2n) {
    background-color: #14de57;
  }

  h2 {
    font-size: 24px;
  }

  p {
    font-size: 16px;
  }

  @media (max-width: 1300px) {
    width: calc(33% - 2rem);
  }

  @media (max-width: 975px) {
    width: calc(50% - 2rem);
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Avatar = styled.img`
  border-radius: 50%;
  width: 75px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
`;
