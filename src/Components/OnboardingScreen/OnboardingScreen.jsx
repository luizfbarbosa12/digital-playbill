import React, { useEffect, useState } from "react";
import {
  Welcome,
  ThankYou,
  GuideText,
  GuideTextArea,
  Icon,
  IconsWrapper,
  Topic,
} from "./styles";
import musicNote from "../../Assets/music-note.svg";
import mic from "../../Assets/mic.svg";
import playlist from "../../Assets/playlist.svg";
import translate from "../../Assets/translate.svg";
import GlassBackground from "../GlassBackground/GlassBackground";
import { goToSetlist } from "../../Router/coordinator";
import { useNavigate } from "react-router-dom";
const OnboardingScreen = () => {
  const [componentIndex, setComponentIndex] = useState(0);
  const navigate = useNavigate();

  const icons = [
    { icon: musicNote, text: "Músicas" },
    { icon: translate, text: "Traduções" },
    { icon: playlist, text: "Playlists" },
    { icon: mic, text: "Artistas" },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setComponentIndex((componentIndex) => componentIndex + 1);
    }, 500);
    return () => clearInterval(intervalId);
  }, []);
  
  return (
    <GlassBackground>
      <Welcome slowRender={componentIndex >= 1}>Boas vindas!</Welcome>
      <ThankYou slowRender={componentIndex >= 2}>
        Obrigado por apoiar um artista local!
      </ThankYou>
      <GuideTextArea>
        <GuideText slowRender={componentIndex >= 3}>
          Fiz esse aplicativo para trazer pra você a melhor experiência possível
        </GuideText>
        <GuideText slowRender={componentIndex >= 4}>
          Nesse aplicativo você pode ver:
        </GuideText>
        <IconsWrapper slowRender={componentIndex >= 5}>
          {icons.map((icon, index) => {
            return (
              <Topic key={index} onClick={() => goToSetlist(navigate)}>
                <Icon>
                  <img src={icon.icon} alt={`icon${index}`} />
                </Icon>
                <p>{icon.text}</p>
              </Topic>
            );
          })}
        </IconsWrapper>
      </GuideTextArea>
    </GlassBackground>
  );
};

export default OnboardingScreen;
