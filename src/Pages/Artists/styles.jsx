import styled from "styled-components";
import { colors } from "../../colors/colors";

export const Container = styled.div`
  height: 41vh;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  justify-content: space-around;
  gap: 1.6rem;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-track {
    background-color: ${colors.lightPrimaryText};
    border-radius: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${colors.primaryPink};
    border-radius: 0.5rem;
  }
`;

export const Dot = styled.span`
 color: ${colors.primaryPink};
`
export const TitleContainer = styled.div`
  padding: 0 1.2rem;
`