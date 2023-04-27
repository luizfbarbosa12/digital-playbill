import styled from "styled-components";

export const CardWrapper = styled.div`
  padding: 1rem;
  height: 140px;
  width: 110px;
  background: linear-gradient(
    172.79deg,
    rgba(255, 255, 255, 0.05) 4.99%,
    rgba(255, 255, 255, 0.2) 92.05%
  );
  box-shadow: 0px 4px 24px 2px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(18px);
  border-radius: 1rem;
`;

export const ArtistPhoto = styled.img`
  height: 8.8rem;
  width: 8.8rem;
  border-radius: 1rem;
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
    position: relative;
    background: linear-gradient(
    172.79deg,
    rgba(255, 255, 255, 0.05) 4.99%,
    rgba(255, 255, 255, 0.2) 92.05%
  );
  box-shadow: 0px 4px 24px 2px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(18px);
  position: absolute;
  left: 50%;
  transform: translate(50%, -50%) ;

  &::after {
    content: "";
    position: absolute;
    height: 12.41px;
    width: 17.23px;
    border-radius: 2px;
    border: 1px solid red;
    left: 50%;
    transform: translate(-50%, 50%);
  }
`