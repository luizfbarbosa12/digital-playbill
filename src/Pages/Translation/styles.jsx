import styled from "styled-components";
import { colors } from "../../colors/colors";

export const LyricsContainer = styled.div`
  max-height: 37.5vh;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 1.6rem;
  font-weight: 700;
  padding: 2rem;
  margin-bottom: 2vh;

  & > p:nth-child(even) {
    color: ${colors.primaryGreen};
  }

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  & > p.odd {
    margin-bottom: 2rem;
  }

  &::-webkit-scrollbar-track {
    background-color: ${colors.lightPrimaryText};
    border-radius: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${colors.primaryGreen};
    border-radius: 0.5rem;
  }
`;

export const SongTitle = styled.h1`
  font-size: 3.6rem;
  font-weight: 700;
  text-align: left;
  width: 100%;
  padding: 1rem 1.6rem 0 1.6rem;
`;

export const TitleTranslation = styled.h3`
  font-weight: 600;
  font-size: 1.8rem;
  color: ${colors.primaryGreen};
  text-align: left;
  width: 100%;
  padding: 1.6rem 0 1.6rem 1.6rem;
`
