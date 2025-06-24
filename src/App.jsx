import React from "react";
import { Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import PageNotFound from "./components/PageNotFound";
import BackToTop from "./components/BackToTop"

import Home from "./pages/Home";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
