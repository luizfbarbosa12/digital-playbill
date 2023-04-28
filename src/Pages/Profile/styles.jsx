import styled from "styled-components";
import { colors } from "../../colors/colors";
export const Header = styled.header`
  position: relative;
  height: 32.5rem;
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
  top: 7rem;
  transform: translate(-50%, 0);
`;

export const PictureFrame = styled.div`
  height: 13.4rem;
  width: 13.4rem;
  background-color: ${colors.lightPrimaryText};
  border-radius: 50%;
  z-index: 1;
`;

export const ProfilePicture = styled.img``;

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
  transform: translateY(-30%);
`;

export const BodyContent = styled.div`
  width: 25rem;
`;
