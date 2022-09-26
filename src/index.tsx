import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "Pages/Home";
import { Books } from "Pages/Books";
import { Post } from "Pages/Post";
import "./index.scss"

const getTheme = () => {
  const currentMonth = new Date().getMonth() + 1;
  return currentMonth === 12 ? "christmas" : currentMonth > 5 && currentMonth < 9 ? "summer" : "halloween";
}

const root = document.getElementById("root")!;
root.classList.add(getTheme());
ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/book-list" element={<Books />}/>
      <Route path="/:year/:month/:day/:title" element={<Post />}/>
    </Routes>
  </BrowserRouter>
);
