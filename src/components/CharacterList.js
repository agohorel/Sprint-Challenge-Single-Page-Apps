import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import Card from "./CharacterCard";
import SearchForm from "./SearchForm";
import { ErrorMessage } from "./ErrorMessage";

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [queryType, setQueryType] = useState("name");
  const [filterTerm, setFilterTerm] = useState("");
  const [filterResults, setFilterResults] = useState([]);
  const [errors, setErrors] = useState("");

  useEffect(() => {
    setTimeout(() => {
      axios
        .get("https://rickandmortyapi.com/api/character/")
        .then(res => setCharacters(res.data.results))
        .catch(err => setErrors(err.message));
    }, 2000);
  }, []);

  useEffect(() => {
    const results = characters.filter(character => {
      if (queryType === "origin" || queryType === "location") {
        return character[queryType].name
          .toLowerCase()
          .includes(filterTerm.toLowerCase());
      } else {
        return character[queryType]
          .toLowerCase()
          .includes(filterTerm.toLowerCase());
      }
    });
    setFilterResults(results);
  }, [filterTerm, characters, queryType]);

  if (!characters.length && !errors) {
    return (
      <Wrapper>
        <SearchForm
          setFilterTerm={setFilterTerm}
          setQueryType={setQueryType}
        ></SearchForm>
        <Loader
          type="Grid"
          color="#14de57"
          height={200}
          width={200}
          style={{ marginTop: "15rem" }}
        ></Loader>
      </Wrapper>
    );
  } else if (characters.length) {
    return (
      <Wrapper>
        <SearchForm
          setFilterTerm={setFilterTerm}
          setQueryType={setQueryType}
        ></SearchForm>
        <CardsList>
          {filterResults.map(character => (
            <Card key={character.id} character={character}></Card>
          ))}
        </CardsList>
      </Wrapper>
    );
  } else if (errors !== "") {
    return (
      <Wrapper>
        <SearchForm
          setFilterTerm={setFilterTerm}
          setQueryType={setQueryType}
        ></SearchForm>
        <ErrorMessage errors={errors}></ErrorMessage>
      </Wrapper>
    );
  }
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
