import React from "react";
import GlassBackground from "../../Components/GlassBackground/GlassBackground";
import { Hero, Title } from "../Setlist/styles";
import guiga from "../../Assets/guiga-app.png";
import {
  Container,
  StreamIcon,
  PlaylistLink,
  StreamingTitle,
  ExclamationPoint,
} from "./styles";
import spotify from "../../Assets/spotify.svg";
import deezer from "../../Assets/deezer.svg";
import youtube from "../../Assets/youtube.svg";
const Playlists = () => {
  const playlists = [
    {
      platform: "Spotify",
      icon: spotify,
      link: "https://open.spotify.com/playlist/5QWpKQ2RLQlAmAx77oBgbX?si=1zDryyAaRC2YSMka_5cXlw",
    },
    {
      platform: "Deezer",
      icon: deezer,
      link: "https://deezer.page.link/bPk9aK5SXKukVAtL9",
    },
    {
      platform: "Youtube",
      icon: youtube,
      link: "https://www.youtube.com/watch?v=JMpypbtrcCg&list=PL2g0qC7PjpkXkS-m1M2TrjNv2xbhu2vmi&ab_channel=FrankOcean-Topic",
    },
  ];
  return (
    <GlassBackground height={"74vh"} padding={"0"}>
      <Hero src={guiga} alt="Guiga" />
      <Container>
        <Title>
          Siga nossa playlist<ExclamationPoint>!</ExclamationPoint>
        </Title>
        {playlists.map((item, index) => {
          return (
            <PlaylistLink
              key={index}
              href={item.link}
              target="_blank"
              rel="noreferrer"
            >
              <StreamIcon src={item.icon} alt={item.platform} />
              <StreamingTitle>{item.platform}</StreamingTitle>
            </PlaylistLink>
          );
        })}
      </Container>
    </GlassBackground>
  );
};

export default Playlists;
