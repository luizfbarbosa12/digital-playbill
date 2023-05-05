import React from "react";
import GlassBackground from "../../Components/GlassBackground/GlassBackground";
import {
  ArtistName,
  ArtistUser,
  DottedBackground,
  Header,
  PictureFrame,
  ProfilePicture,
  UserInfoContainer,
  Bio,
  BodyContent,
  Links,
  FollowText,
  PreviousBtn
} from "./styles";
import dots from "../../Assets/dots.svg";
import instagram from "../../Assets/instagram.png";
import artistsInfo from "../../data/artists-info.json";
import { useParams, useNavigate } from "react-router-dom";
import vitor from "../../Assets/vitor.jpg";
import guiga from "../../Assets/guiga-profile.jpg";
import luiz from "../../Assets/luiz-profile.jpg";
import renara from "../../Assets/renara.jpg";
import samuel from "../../Assets/samuel.png";
import joao from "../../Assets/joao-app.png";
import joan from "../../Assets/joan.jpg";
import previous from '../../Assets/previous.png'
import soma from '../../Assets/soma.jpg'
const Profile = () => {
  const navigate = useNavigate();
  const params = useParams();
  const profilePictures = [
    { id: "1", picture: luiz },
    { id: "2", picture: renara },
    { id: "3", picture: samuel },
    { id: "4", picture: vitor },
    { id: "5", picture: joao },
    { id: "6", picture: guiga },
    { id: "7", picture: joan },
    { id: "8", picture: soma },
  ];
  const specificArtist = artistsInfo.find((artist) => artist.id === params.id);
  const findProfilePicture = profilePictures.find(
    (picture) => picture.id === params.id
  );
  return (
    <GlassBackground>
      <Header>
        <PreviousBtn src={previous} alt="previous page" onClick={() => navigate(-1)}/>
        <DottedBackground src={dots} alt="dots" />
        <PictureFrame>
          <ProfilePicture src={findProfilePicture.picture} alt="artist-photo" />
        </PictureFrame>
        <UserInfoContainer>
          <ArtistName>{specificArtist.name}</ArtistName>
          <ArtistUser>{specificArtist.user}</ArtistUser>
        </UserInfoContainer>
      </Header>
      <BodyContent>
        <Bio>{specificArtist.bio}</Bio>
        <Links>
          <a href={specificArtist.instagram} target="_blank" rel="noreferrer">
            <img src={instagram} alt="instagram-logo" />
          </a>
          <FollowText>Me siga no Instagram! </FollowText>
        </Links>
      </BodyContent>
    </GlassBackground>
  );
};

export default Profile;
