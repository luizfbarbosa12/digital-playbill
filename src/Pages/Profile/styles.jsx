import styled from "styled-components";
import { colors } from "../../colors/colors";
export const Header = styled.header`
  position: relative;
  height: 25rem;
  width: 100%;
  display: flex;
  gap: 4rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const DottedBackground = styled.img`
  position: absolute;
  left: 50%;
  top: 3rem;
  transform: translate(-50%, 0);
`;

export const PictureFrame = styled.div`
  height: 13.4rem;
  width: 13.4rem;
  background-color: ${colors.lightPrimaryText};
  border-radius: 50%;
  z-index: 1;
`;

export const ProfilePicture = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

export const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ArtistName = styled.h1`
  font-size: 2.8rem;
  z-index: 1;
`;

export const ArtistUser = styled.h3`
  font-size: 1.6rem;
`;

export const Bio = styled.p`
  font-size: 1.2rem;
  text-align: center;
  width: 100%;
`;

export const BodyContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const Links = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const FollowText = styled.p`
  font-size: 1.6rem;
`