import React from "react";
import { BrowserRouter, Route, Routes as PageRoutes } from "react-router-dom";
import App from "../App";
import Students from "../Students";

export function Routes() {
  return (
    <BrowserRouter>
      <PageRoutes>
        <Route path="/" element={<App />} />
        <Route path="/students" element={<Students />} />
      </PageRoutes>
    </BrowserRouter>
  );
}
