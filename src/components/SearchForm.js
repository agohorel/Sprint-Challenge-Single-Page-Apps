import React from "react";
import styled from "styled-components";

export default function SearchForm({ setFilterTerm, setQueryType }) {
  return (
    <FilterContainer>
      <Label htmlFor="filter">
        Filter by Character{" "}
        <span>
          {" "}
          <Select onChange={e => setQueryType(e.target.value)}>
            <option value="name">Name</option>
            <option value="species">Species</option>
            <option value="origin">Origin</option>
            <option value="location">Location</option>
          </Select>
        </span>
        :
      </Label>

      <Input
        type="text"
        id="filter"
        onChange={e => setFilterTerm(e.target.value)}
      ></Input>
    </FilterContainer>
  );
}

const Label = styled.label`
  font-size: 14px;
  display: block;
  text-align: center;
  font-weight: bolder;
`;

const FilterContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #6c6c6c;
  padding: 0.75rem;
  border-radius: 3px;
  width: calc(33% - 2rem);
  transition: 0.2s ease-out width;

  @media (max-width: 975px) {
    width: calc(50% - 2rem);
  }

  @media (max-width: 600px) {
    width: calc(100% - 2rem);
  }
`;

const Input = styled.input`
  padding: 5px;
  border: none;
  background-color: #3c3c3c;
  border-radius: 3px;
  color: white;
  font-size: 12px;
  margin-top: 5px;
  font-family: "IBM Plex Mono", monospace;
`;

const Select = styled.select`
  border: none;
  background-color: #14de57;
  font-family: "IBM Plex Mono", monospace;
  border-radius: 3px;
  font-weight: bolder;

  option {
    background-color: #14abde;

    &:hover {
      background-color: #14de57;
      color: white;
    }
  }
`;
