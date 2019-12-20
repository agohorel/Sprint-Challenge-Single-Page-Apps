import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import Card from "./CharacterCard";
import SearchForm from "./SearchForm";

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [filterTerm, setFilterTerm] = useState("");
  const [filterResults, setFilterResults] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      axios
        .get("https://rickandmortyapi.com/api/character/")
        .then(res => setCharacters(res.data.results))
        .catch(err => console.error(err));
    }, 2000);
  }, []);

  useEffect(() => {
    const results = characters.filter(character =>
      character.name.toLowerCase().includes(filterTerm.toLowerCase())
    );

    setFilterResults(results);
  }, [filterTerm, characters]);

  return (
    <Wrapper>
      <SearchForm setFilterTerm={setFilterTerm}></SearchForm>
      {characters.length ? (
        <CardsList>
          {filterResults.map(character => (
            <Card key={character.id} character={character}></Card>
          ))}
        </CardsList>
      ) : (
        <Loader
          type="Grid"
          color="#14de57"
          height={200}
          width={200}
          style={{ marginTop: "15rem" }}
        ></Loader>
      )}
    </Wrapper>
  );
}

const CardsList = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
