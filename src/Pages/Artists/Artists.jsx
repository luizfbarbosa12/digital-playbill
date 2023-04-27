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

const Artists = () => {
  const artists = [
    { id: 1, picture: luiz, name: "Luiz Barbosa", role: "Cantor e ator" },
    {
      id: 2,
      picture: vitor,
      name: "Vitor Schmidlin",
      role: "Músico multi-instrumentista e cantor",
    },
    {
      id: 3,
      picture: joao,
      name: "João Vitor",
      role: "Músico multi-instrumentista",
    },
    { id: 4, picture: guiga, name: "Guiga Barsch", role: "Baixista" },
    { id: 5, picture: renara, name: "Maria Renara", role: "Dançarina" },
    { id: 6, picture: samuel, name: "Samuel Stege", role: "Fotógrafo" },
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
          return <ArtistCard artist={artist} />;
        })}
      </Container>
    </GlassBackground>
  );
};

export default Artists;
