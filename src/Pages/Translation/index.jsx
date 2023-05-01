import React from "react";
import GlassBackground from "../../Components/GlassBackground/GlassBackground";
import vitor from "../../Assets/vitor.jpg";
import { Hero } from "../Setlist/styles";
import lyrics from "../../data/lyrics.json";
import { LyricsContainer, SongTitle, TitleTranslation } from "./styles";
import { useParams } from "react-router-dom";
const Translation = () => {
  const params = useParams();

  const specificLyric = lyrics.find((lyric) => lyric.id === params.id);
  
  const mergeLyricsAndTranslation = () => {
    let lyricsTranslation = [];
    for (
      let i = 0;
      i < specificLyric.lyrics.length || i < specificLyric.translation.length;
      i++
    ) {
      if (i < specificLyric.lyrics.length) {
        lyricsTranslation.push(specificLyric.lyrics[i]);
      }

      if (i < specificLyric.translation.length) {
        lyricsTranslation.push(specificLyric.translation[i]);
      }
    }
    return lyricsTranslation;
  };
  return (
    <GlassBackground height={"74vh"} padding={"0"}>
      <Hero src={vitor} alt="Baterista Vitor" />
      <SongTitle>{specificLyric.title}</SongTitle>
      <TitleTranslation>{specificLyric.titleTranslation}</TitleTranslation>
      <LyricsContainer>
        {mergeLyricsAndTranslation().map((sentence, i) => {
          return (
            <p key={i} className={i % 2 === 0 ? "even" : "odd"}>
              {sentence}
            </p>
          );
        })}
      </LyricsContainer>
    </GlassBackground>
  );
};

export default Translation;
