import styled from "styled-components";

export const Welcome = styled.h1`
  font-weight: 700;
  font-size: 4.2rem;
  transition: opacity 2s ease;
  opacity: ${(props) => props.slowRender ? 1 : 0};
`;

export const GuideTextArea = styled.div`
  height: 100%;
  transform: translateY(10%);
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;
export const ThankYou = styled.h3`
  font-weight: 600;
  font-size: 2.4rem;
  display: flex;
  text-align: center;
  margin: 1.2rem;
  transition: opacity 2s ease;
  opacity: ${(props) => props.slowRender ? 1 : 0};
`;

export const GuideText = styled.p`
  font-size: 1.6rem;
  text-align: center;
  margin: 1.2rem;
  transition: opacity 2s ease;
  opacity: ${(props) => props.slowRender ? 1 : 0};
`;

export const IconsWrapper = styled.div`
  display: flex;
  column-gap: 5rem;
  row-gap: 3rem;
  flex-wrap: wrap;
  justify-content: center;
  transition: opacity 2s ease;
  opacity: ${(props) => props.slowRender ? 1 : 0};
`
export const Topic = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 1.1rem;
  justify-content: center;
  align-items: center;
`
export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background: linear-gradient(
    180deg,
    rgba(230, 230, 230, 0.4) 0%,
    rgba(235, 235, 235, 0.4) 100%
  );
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

