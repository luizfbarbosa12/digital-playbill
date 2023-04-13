import styled from "styled-components";
import { colors } from "../../colors/colors";

export const GlassNavBar = styled.div`
  display: flex;
  padding: 1.6rem;
  align-items: center;
  justify-content: space-around;
  height: 10vh;
  width: 89vw;
  background: linear-gradient(
    172.79deg,
    rgba(255, 255, 255, 0.05) 4.99%,
    rgba(255, 255, 255, 0.2) 92.05%
  );
  box-shadow: 0px 4px 24px 2px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(20px);
  border-radius: 2rem;
  position: absolute;
  bottom: 1.8rem;
  transform: translate(20px);
  border: 1px solid rgba(230, 230, 230, 0.218);
`;

export const Icons = styled.img`
  fill: ${colors.darkTitleText};
  height: 2.4rem;
`