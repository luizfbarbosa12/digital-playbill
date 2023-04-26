import styled from "styled-components";
import { colors } from "../../colors/colors";

export const Container = styled.div`
  height: 20vh;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 5rem;
  padding: 1rem 2rem 0 2rem;
`;

export const StreamIcon = styled.img`
    height: 6.4rem;
    width: 6.4rem;
`
export const PlaylistLink = styled.a`
    cursor: pointer;
    color: ${colors.lightPrimaryText};
    text-decoration: none;
    font-size: 1.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;

    &:visited {
        color: ${colors.darkPrimaryText};
    }
`
export const StreamingTitle = styled.p`
    color: ${colors.lightPrimaryText};
`

export const ExclamationPoint = styled.span`
color: ${colors.primaryGreen};
`