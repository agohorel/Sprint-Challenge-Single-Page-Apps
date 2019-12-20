import React from "react";

export default function CharacterCard({ character }) {
  return (
    <div>
      <p>name: {character.name}</p>
      <p>species: {character.species}</p>
      <p>origin: {character.origin.name}</p>
      <p>status: {character.status}</p>
    </div>
  );
}
