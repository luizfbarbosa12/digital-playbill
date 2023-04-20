import React from "react";
import GlassBackground from "../../Components/GlassBackground/GlassBackground";
import vitor from "../../Assets/Vitor-app.png";
import { Hero } from "../Setlist/styles";
const Translation = () => {

  return (
    <GlassBackground height={"79.5vh"} padding={"0"}>
      <Hero src={vitor} alt="Vocalista: Luiz" />
    </GlassBackground>
  );
};

export default Translation;
