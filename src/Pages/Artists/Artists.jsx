import React from 'react'
import GlassBackground from "../../Components/GlassBackground/GlassBackground";
import { Hero, Title } from "../Setlist/styles";
import joao from '../../Assets/joao-app.png'
import { Container } from './styles';
import ArtistCard from '../../Components/ArtistCard/ArtistCard';
const Artists = () => {
  return (
    <GlassBackground height={"74vh"} padding={"0"}>
      <Hero src={joao} alt={'Joao'}/>
      <Title>Conheça um pouco sobre nós</Title>
      <Container>
        <ArtistCard/>
      </Container>
    </GlassBackground>
  )
}

export default Artists