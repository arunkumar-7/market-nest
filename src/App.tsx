import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:name" element={<CategoryPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
