import React from "react";
import {
  Container,
  GreenCircle,
  Diamond,
  Triangle,
  StartButton,
} from "./styles";
import OnboardingScreen from "../../Components/OnboardingScreen/OnboardingScreen";
import arrowRight from "../../Assets/arrow-right.svg";
import { GlassNavBar } from "../../Components/NavBar/styles";
import { goToSetlist } from "../../Router/coordinator";
import { useNavigate } from "react-router-dom";

const Onboarding = () => {
  const navigate = useNavigate()
  return (
    <Container>
      <GreenCircle />
      <Diamond />
      <Triangle />
      <OnboardingScreen />
      <StartButton onClick={() => goToSetlist(navigate)}>
        <img src={arrowRight} alt="start arrow" />
      </StartButton>
      <GlassNavBar />
    </Container>
  );
};

export default Onboarding;
