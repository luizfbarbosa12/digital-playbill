import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Onboarding from "../Pages/Onboarding";
import Setlist from "../Pages/Setlist";
import Translation from "../Pages/Translation";
import NavBar from "../Components/NavBar/NavBar";
import Playlists from "../Pages/Playlists";
import Artists from "../Pages/Artists";
import Profile from "../Pages/Profile";

const Router = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Profile />} />
        <Route path="/setlist" element={<Setlist />} />
        <Route path="/translation/:id?" element={<Translation />} />
        <Route path="/playlists" element={<Playlists />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/artists/:name" element={<Artists />} />
      </Routes>
      <NavBar />
    </BrowserRouter>
  );
};

export default Router;
