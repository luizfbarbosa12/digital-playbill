import React from "react";
import { GlassNavBar, Icons } from "./styles";
import musicNote from '../../Assets/music-note.svg'
import translate from '../../Assets/translate.svg'
import playlist from '../../Assets/playlist.svg'
import mic from '../../Assets/mic.svg'

const NavBar = () => {
  return (
    <GlassNavBar>
      <Icons src={musicNote} alt="set" />
      <Icons src={translate} alt="traducoes" />
      <Icons src={playlist} alt="playlists" />
      <Icons src={mic} alt="artistas" />
    </GlassNavBar>
  );
};

export default NavBar;
