import React, { useEffect, useState } from "react";
import axios from "axios";

import Card from "./CharacterCard";
import SearchForm from "./SearchForm";

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [filterTerm, setFilterTerm] = useState("");
  const [filterResults, setFilterResults] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(res => setCharacters(res.data.results))
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    const results = characters.filter(character =>
      character.name.toLowerCase().includes(filterTerm.toLowerCase())
    );

    setFilterResults(results);
  }, [filterTerm, characters]);

  return (
    <section className="character-list">
      <SearchForm setFilterTerm={setFilterTerm}></SearchForm>
      {filterResults.map(character => (
        <Card key={character.id} character={character}></Card>
      ))}
    </section>
  );
}
