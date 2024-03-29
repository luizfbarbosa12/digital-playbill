import React from "react";
import GlassBackground from "../../Components/GlassBackground/GlassBackground";
import { Hero, Title } from "../Setlist/styles";
import joao from "../../Assets/joao-app.png";
import { Container, Dot, TitleContainer } from "./styles";
import ArtistCard from "../../Components/ArtistCard/ArtistCard";
import vitor from "../../Assets/vitor.jpg";
import guiga from "../../Assets/guiga-profile.jpg";
import luiz from "../../Assets/luiz-profile.jpg";
import renara from "../../Assets/renara.jpg";
import samuel from "../../Assets/samuel.png";
import { goToSpecificArtist } from "../../Router/coordinator";
import { useNavigate } from "react-router-dom";
import joan from '../../Assets/joan.jpg'
import soma from '../../Assets/soma.jpg'

const Artists = () => {
  const navigate = useNavigate();
  const artists = [
    { id: "1", picture: luiz, name: "Luiz Barbosa", role: "Cantor e ator" },
    {
      id: "4",
      picture: vitor,
      name: "Vitor Schmidlin",
      role: "Músico multi-instrumentista e cantor",
    },
    {
      id: "5",
      picture: joao,
      name: "João Vitor",
      role: "Músico multi-instrumentista",
    }
  ];

  return (
    <GlassBackground height={"74vh"} padding={"0"}>
      <Hero src={joao} alt={"Joao"} />
      <TitleContainer>
        <Title>
          Conheça um pouco sobre nós<Dot>.</Dot>
        </Title>
      </TitleContainer>
      <Container>
        {artists.map((artist) => {
          return (
            <ArtistCard
              key={artist.id}
              clickFn={() => goToSpecificArtist(navigate, artist.id)}
              artist={artist}
            />
          );
        })}
      </Container>
    </GlassBackground>
  );
};

export default Artists;
