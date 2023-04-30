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
} from "./styles";
import dots from "../../Assets/dots.svg";
import instagram from "../../Assets/instagram.png";
import artistsInfo from "../../data/artists-info.json";
import { useParams } from "react-router-dom";
const Profile = () => {
  const params = useParams();
  const specificArtist = artistsInfo.find((artist) => artist.id === params.id);
  console.log(specificArtist);
  return (
    <GlassBackground>
      <Header>
        <DottedBackground src={dots} alt="" />
        <PictureFrame>
          <ProfilePicture src="" alt="" />
        </PictureFrame>
        <UserInfoContainer>
          <ArtistName>Luiz Barbosa</ArtistName>
          <ArtistUser>@luizf.barbosa</ArtistUser>
        </UserInfoContainer>
      </Header>
      <BodyContent>
        <Bio>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique
          voluptas est voluptatem. Deserunt sit, odio est aperiam exercitationem
          sed possimus, excepturi repellendus consequuntur, dolorum qui quae
          mollitia esse placeat deleniti.
        </Bio>
        <a href="">
          <img src={instagram} alt="instagram-logo" />
        </a>
        <a href="">portfolio</a>
      </BodyContent>
    </GlassBackground>
  );
};

export default Profile;
