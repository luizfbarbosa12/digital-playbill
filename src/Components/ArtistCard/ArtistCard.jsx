import React from "react";
import { CardWrapper,ArtistPhoto, ArtistName, ArtistPosition, Play } from "./styles";

const ArtistCard = (props) => {
  return <CardWrapper>
    <ArtistPhoto src={props.profilePicture} alt="Artist photo" />
    <ArtistName>luiz</ArtistName>
    <ArtistPosition>cantor</ArtistPosition>
    <Play/>
  </CardWrapper>;
};

export default ArtistCard;
