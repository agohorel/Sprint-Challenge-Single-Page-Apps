import React from "react";
import styled from "styled-components";

export const ErrorMessage = ({ errors }) => {
  return <Error>{errors}</Error>;
};

const Error = styled.div`
  border-radius: 3px;
  background-color: #ed0c2a;
  color: white;
  padding: 2rem;
  margin-top: 5rem;
`;
