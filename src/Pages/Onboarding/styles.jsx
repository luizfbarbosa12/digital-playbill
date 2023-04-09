import styled, { keyframes } from "styled-components";
import { colors } from "../../colors/colors";

const floatCircle = keyframes`
  0%  { transform: translate(155px, -20px) rotate(0deg); }
  10% { transform: translate(154px, -18px) rotate(-2deg); }
  20% { transform: translate(156px, -20px) rotate(3deg); }
  30% { transform: translate(155px, -18px) rotate(0deg); }
  40% { transform: translate(154px, -21px) rotate(1deg); }
  50% { transform: translate(154px, -18px) rotate(-1deg); }
  60% { transform: translate(157px, -19px) rotate(0deg); }
  70% { transform: translate(153px, -21px) rotate(-2deg); }
  80% { transform: translate(154px, -20px) rotate(4deg); }
  90% { transform: translate(156px, -22px) rotate(0deg); }
  100%{ transform: translate(155px, -20px) rotate(-1deg); }
`;

const floatDiamond = keyframes`
  0%  { transform: translate(30px, 100px) rotate(131deg); }
  10% { transform: translate(32px, 99px) rotate(129deg); }
  20% { transform: translate(33px, 100px) rotate(132deg); }
  30% { transform: translate(31px, 98px) rotate(131deg); }
  40% { transform: translate(29px, 102px) rotate(132deg); }
  50% { transform: translate(30px, 99px) rotate(130deg); }
  60% { transform: translate(34px, 103px) rotate(131deg); }
  70% { transform: translate(32px, 101px) rotate(129deg); }
  80% { transform: translate(33px, 97px) rotate(133deg); }
  90% { transform: translate(32px, 98px) rotate(131deg); }
  100%{ transform: translate(30px, 100px) rotate(130deg); }
`;

const floatTriangle = keyframes`
  0%  { transform: translate(157px, 200px) rotate(131deg); }
  10% { transform: translate(155px, 202px) rotate(129deg); }
  20% { transform: translate(158px, 201px) rotate(132deg); }
  30% { transform: translate(156px, 199px) rotate(131deg); }
  40% { transform: translate(155px, 198px) rotate(132deg); }
  50% { transform: translate(157px, 200px) rotate(130deg); }
  60% { transform: translate(154px, 202px) rotate(131deg); }
  70% { transform: translate(156px, 201px) rotate(129deg); }
  80% { transform: translate(152px, 203px) rotate(133deg); }
  90% { transform: translate(157px, 199px) rotate(131deg); }
  100%{ transform: translate(157px, 2W00px) rotate(130deg); }
`;

export const Container = styled.div`
  background: linear-gradient(
    45deg,
    ${colors.darkSubTitle} 0%,
    ${colors.darkTitleText} 35%,
    ${colors.darkPrimaryText} 75%
  );
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

export const GreenCircle = styled.div`
  height: 15rem;
  width: 15rem;
  border-radius: 50%;
  transform: translate(155px, -20px);
  background: linear-gradient(
    45deg,
    ${colors.primaryPink} 0%,
    rgba(246, 155, 187, 1) 35%,
    #f37ea8 75%
  );
  box-shadow: 0px 4px 12px 2px rgba(0, 0, 0, 0.2);
  animation: ${floatCircle} 4s ease-in-out infinite;
`;

export const Diamond = styled.div`
  height: 15rem;
  width: 15rem;
  border-radius: 1.6rem;
  background: linear-gradient(45deg, ${colors.primaryGreen} 0%, #70a884 35%);
  transform: translate(30px, 100px) rotate(131deg);
  box-shadow: 0px 4px 12px 2px rgba(0, 0, 0, 0.2);
  animation: ${floatDiamond} 4s ease-in-out infinite;
`;

export const Triangle = styled.div`
  height: 17rem;
  width: 17rem;
  border-radius: 50%;
  background: linear-gradient(
    45deg,
    ${colors.primaryPink} 0%,
    rgba(246, 155, 187, 1) 35%,
    #f37ea8 75%
  );
  transform: translate(157px, 200px) rotate(131deg);
  box-shadow: 0px 4px 12px 2px rgba(0, 0, 0, 0.2);
  animation: ${floatTriangle} 4s ease-in-out infinite;
`;

export const GlassNavBar = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.6rem;
  align-items: center;
  height: 10vh;
  width: 89vw;
  background: linear-gradient(
    172.79deg,
    rgba(255, 255, 255, 0.05) 4.99%,
    rgba(255, 255, 255, 0.2) 92.05%
  );
  box-shadow: 0px 4px 24px 2px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(18px);
  border-radius: 2rem;
  position: absolute;
  bottom: 1.8rem;
  transform: translate(20px);
  border: 1px solid rgba(230, 230, 230, 0.218);
  color: ${colors.lightPrimaryText};
`;
