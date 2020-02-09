import React from "react";
import styled from "styled-components";

export default function WelcomePage() {
  return (
    <HomeContainer>
      <header>
        <SubHeading>Welcome to the ultimate fan site!</SubHeading>
        <ImageWrapper>
          <Image
            className="main-img"
            src={`https://rickandmortyapi.com/api/character/avatar/${Math.floor(
              Math.random() * 493
            )}.jpeg`}
            alt="rick"
          />
        </ImageWrapper>
      </header>
    </HomeContainer>
  );
}

const HomeContainer = styled.section`
  height: 65vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SubHeading = styled.h2`
  font-size: 32px;
  text-align: center;
  color: #aaa;
  margin-top: 2rem;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  border-radius: 50%;
  margin-top: 5rem;
  width: 25vw;
  min-width: 200px;
`;
