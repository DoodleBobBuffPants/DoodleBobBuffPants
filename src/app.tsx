import { ReactNode } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { basePath } from "./hooks/useBasePath";
import ThemeProvider from "./theme/ThemeProvider";
import Home from "./page";
import Books from "./book-list/page";
import Post from "./posts/page";

const theme = (children: ReactNode) => <ThemeProvider>{children}</ThemeProvider>;

const App = () => (
  <BrowserRouter basename={basePath}>
    <Routes>
      <Route path="/" element={theme(<Home />)} />
      <Route path="/book-list" element={theme(<Books />)} />
      <Route path="/posts/:year/:month/:day/:title" element={theme(<Post />)} />
      <Route path="*" element={<Navigate to={basePath} />} />
    </Routes>
  </BrowserRouter>
);

export default App;
