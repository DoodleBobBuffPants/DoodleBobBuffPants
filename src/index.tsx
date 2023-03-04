import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "Pages/Home";
import { Books } from "Pages/Books";
import { Post } from "Pages/Post";
import { getTheme } from "Pages/Base/Themes";
import "./index.scss";

const root = document.getElementById("root")!;
root.classList.add(getTheme());
ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/book-list" element={<Books />} />
      <Route path="/:year/:month/:day/:title" element={<Post />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </BrowserRouter>
);
