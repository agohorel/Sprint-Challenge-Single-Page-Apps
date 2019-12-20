import React, { useEffect, useState } from "react";
import axios from "axios";

import Card from "./CharacterCard";

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(res => setCharacters(res.data.results))
      .catch(err => console.error(err));
  }, []);

  console.log(characters);

  return (
    <section className="character-list">
      {characters.map(character => (
        <Card id={character.id} character={character}></Card>
      ))}
    </section>
  );
}
