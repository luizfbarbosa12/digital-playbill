import React from "react";
import { Container, GreenCircle, Diamond, Triangle, GlassNavBar } from "./styles";
import OnboardingGlass from "../../Components/OnBoardingGlass/OnboardingGlass";
const Onboarding = () => {
  return (
    <Container>
      <GreenCircle />
      <Diamond />
      <Triangle />
      <OnboardingGlass />
      <GlassNavBar/>
    </Container>
  );
};

export default Onboarding;
