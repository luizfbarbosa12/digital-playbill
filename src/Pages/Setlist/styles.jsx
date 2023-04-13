import styled from "styled-components";
import { colors } from "../../colors/colors";
export const Hero = styled.img`
  height: 19.8rem;
  border-radius: 4.2rem 4.2rem 0 0;
  width: 100%;
`;

export const Container = styled.div`
  padding: 1.6rem;
`;
export const Title = styled.h1`
  font-size: 3.6rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const QuestionMark = styled.span`
  color: ${colors.primaryPink};
`;
export const SongsList = styled.ul`
  height: 30rem;
  list-style-type: none;
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

export const Song = styled.li`
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0.1rem;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  gap: 0.5rem;
`;

export const SongLength = styled.span`
    color: ${colors.primaryPink};
`
export const Name = styled.p`
    display: flex;
    width: 100%;
    justify-content: flex-start;
    align-items: flex-start;
`

export const Artist = styled.p`
    width: 100%;
`
    
