import styled from "styled-components";

export const CardWrapper = styled.div`
  padding: 1rem;
  height: 180px;
  width: 130px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background: linear-gradient(
    172.79deg,
    rgba(255, 255, 255, 0.05) 4.99%,
    rgba(255, 255, 255, 0.2) 92.05%
  );
  box-shadow: 0px 4px 24px 2px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(18px);
  border-radius: 1rem;
  position: relative;
`;

export const ArtistPhoto = styled.img`
  height: 12rem;
  width: 11rem;
  border-radius: 1rem;
  object-fit: cover;
  
`;
export const ArtistName = styled.p`
  font-weight: 700;
  font-size: 1rem;
`;
export const ArtistPosition = styled.p`
  font-size: 0.8rem;
  font-style: italic;
`;

export const Play = styled.div`
    height: 3.5rem;
    width: 3.5rem;
    border-radius: 50%;
    position: absolute;
    top: 5rem;
    left: 5rem;
    background: linear-gradient(
    172.79deg,
    rgba(255, 255, 255, 0.05) 4.99%,
    rgba(255, 255, 255, 0.2) 92.05%
  );
  box-shadow: 0px 4px 24px 2px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
`