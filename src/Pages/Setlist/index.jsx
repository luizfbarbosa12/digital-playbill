import React, {useContext} from "react";
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
import { goToSpecificTranslation } from "../../Router/coordinator";
import { useNavigate } from "react-router-dom";
import { CurrentSongContext } from "../../contexts/CurrentSongContext";

const Setlist = () => {
  const navigate = useNavigate()
  const {setters} = useContext(CurrentSongContext);

  const lyricsNavigation = (id) => {
    setters.setCurrentSong(id)
    goToSpecificTranslation(navigate, id)
  }
  return (
    <>
      <GlassBackground height={"74vh"} padding={"0"}>
        <Hero src={luiz} alt="Vocalista: Luiz" />
        <Container>
          <Title>
            Have you ever loved<QuestionMark>?</QuestionMark>
          </Title>
          <SongsList>
            {songs?.map((item) => {
              return (
                <Song key={item.id} onClick={() => lyricsNavigation(item.id)}>
                  <SongLength>{item.length}</SongLength>
                  <Name>{item.song}</Name>
                  <Artist>{item.artist}</Artist>
                </Song>
              );
            })}
          </SongsList>
        </Container>
      </GlassBackground>
    </>
  );
};

export default Setlist;
