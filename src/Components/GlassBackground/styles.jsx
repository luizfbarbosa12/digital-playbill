import styled from "styled-components";
import { colors } from "../../colors/colors";

export const Glass = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${(props) => props.padding || '1.6rem'};;
  align-items: center;
  min-height: ${(props) => props.height || '72vh'};
  width: 89vw;
  background: linear-gradient(
    172.79deg,
    rgba(255, 255, 255, 0.05) 4.99%,
    rgba(255, 255, 255, 0.2) 92.05%
  );
  box-shadow: 0px 4px 24px 2px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(18px);
  border-radius: 2.5rem;
  position: absolute;
  top: 0.8rem;
  right: 2.1rem;
  border: 1px solid rgba(230, 230, 230, 0.218);
  color: ${colors.lightPrimaryText};
`;