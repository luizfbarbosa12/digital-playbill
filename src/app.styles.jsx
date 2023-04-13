import styled from "styled-components"
import { colors } from "./colors/colors"

export const Background = styled.div`
    background: linear-gradient(
    45deg,
    ${colors.darkSubTitle} 0%,
    ${colors.darkTitleText} 35%,
    ${colors.darkPrimaryText} 75%
  );
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`