import React from "react";
import {
  Container,
  GreenCircle,
  Diamond,
  Triangle,
} from "./styles";
import OnboardingScreen from "../../Components/OnboardingScreen/OnboardingScreen";

const Onboarding = () => {
  return (
    <Container>
      <GreenCircle />
      <Diamond />
      <Triangle />
      <OnboardingScreen />
    </Container>
  );
};

export default Onboarding;
