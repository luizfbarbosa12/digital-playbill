import React from "react";
import luiz from "../../Assets/luiz-app.png";
import {
  Hero,
  Title,
  Container,
  QuestionMark,
  SongsList,
  Song,
  SongLength,
  Name,
  Artist,
} from "./styles";
import songs from "../../data/songs.json";
import GlassBackground from "../../Components/GlassBackground/GlassBackground";
import GlassNavBar from "../../Components/NavBar/NavBar";
const Setlist = () => {
  return (
    <>
      <GlassBackground height={"83vh"} padding={"0"}>
        <Hero src={luiz} alt="Vocalista: Luiz" />
        <Container>
          <Title>
            Have you ever loved<QuestionMark>?</QuestionMark>
          </Title>
          <SongsList>
            {songs?.map((item) => {
              return (
                <Song key={item.song}>
                  <SongLength>{item.length}</SongLength>
                  <Name>{item.song}</Name>
                  <Artist>{item.artist}</Artist>
                </Song>
              );
            })}
          </SongsList>
        </Container>
      </GlassBackground>
      <GlassNavBar />
    </>
  );
};

export default Setlist;
