import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "Pages/Home";
import { Books } from "Pages/Books";
import { Post } from "Pages/Post";
import "./index.scss"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/book-list" element={<Books />}/>
      <Route path="/:year/:month/:day/:title" element={<Post />}/>
    </Routes>
  </BrowserRouter>
);
