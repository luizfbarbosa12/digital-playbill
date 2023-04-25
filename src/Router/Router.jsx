import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Onboarding from "../Pages/Onboarding";
import Setlist from "../Pages/Setlist";
import Translation from "../Pages/Translation";
import NavBar from "../Components/NavBar/NavBar";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Onboarding/>} />
        <Route path="/setlist" element={<Setlist />} />
        <Route path="/translation/:id" element={<Translation />} />
      </Routes>
      <NavBar/>
    </BrowserRouter>
  );
};

export default Router;
