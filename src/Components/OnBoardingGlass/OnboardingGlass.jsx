import React from "react";
import {
  Glass,
  Welcome,
  ThankYou,
  GuideText,
  GuideTextArea,
  Icon,
  IconsWrapper,
  Topic
} from "./styles";
import musicNote from "../../Assets/music-note.svg";
import chat from "../../Assets/chat.svg";
import mic from "../../Assets/mic.svg";
import playlist from "../../Assets/playlist.svg";
import translate from "../../Assets/translate.svg";

const OnboardingGlass = () => {
  const icons = [
    { icon: musicNote, text: "Músicas" },
    { icon: translate, text: "Traduções" },
    { icon: playlist, text: "Playlists" },
    { icon: mic, text: "Artistas" },
    { icon: chat, text: "Mensagens" },
  ];

  return (
    <Glass>
      <Welcome>Boas vindas!</Welcome>
      <ThankYou>Obrigado por apoiar um artista local!</ThankYou>
      <GuideTextArea>
        <GuideText>
          Fiz esse aplicativo para trazer pra você a melhor experiência possível{" "}
        </GuideText>
        <GuideText>Nesse aplicativo você pode ver:</GuideText>
        <IconsWrapper>
          {icons.map((icon, index) => {
            return (
              <Topic>
                <Icon>
                  <img src={icon.icon} alt={`icon${index}`} />
                </Icon>
                <p>{icon.text}</p>
              </Topic>
            );
          })}
        </IconsWrapper>
      </GuideTextArea>
    </Glass>
  );
};

export default OnboardingGlass;
