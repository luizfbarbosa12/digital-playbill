import React, { useState } from "react";
import { CurrentSongContext } from "./CurrentSongContext";

const CurrentSong = (props) => {
  const [currentSong, setCurrentSong] = useState();

  const states = { currentSong };
  const setters = { setCurrentSong };
  const data = {states, setters}
  return (
    <CurrentSongContext.Provider value={data}>
      {props.children}
    </CurrentSongContext.Provider>
  );
};

export default CurrentSong;
