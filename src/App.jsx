import React from "react";
import { Route, Routes } from "react-router-dom";
import Layouts from "./Layouts/index";
import NotFound from "./Pages/404";

export default function App() {
  return (
      <Routes>
          <Route path="/" element={<Layouts />}/>
          <Route path="*" element={<NotFound />}/>
      </Routes>
  )
};
