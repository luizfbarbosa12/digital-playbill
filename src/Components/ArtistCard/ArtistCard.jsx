import React from "react";
import {
  CardWrapper,
  ArtistPhoto,
  ArtistName,
  ArtistPosition,
  Play,
} from "./styles";
import play from "../../Assets/play.svg";
const ArtistCard = ({ artist, clickFn }) => {
  return (
    <CardWrapper onClick={clickFn}>
      <ArtistPhoto src={artist.picture} alt="Artist photo" />
      <ArtistName>{artist.name}</ArtistName>
      <ArtistPosition>{artist.role}</ArtistPosition>
      <Play>
        <img src={play} alt="" />
      </Play>
    </CardWrapper>
  );
};

export default ArtistCard;
