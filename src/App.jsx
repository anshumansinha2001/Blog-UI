import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BlogPostPage from "./pages/BlogPostPage";
import { SidebarOne } from "./components/SidebarOne";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <div className="relative">
      <div className="sticky w-screen top-0 z-10">
        <Navbar />
      </div>
      <div className="mx-auto flex max-w-7xl items-start justify-between px-4 py-2 sm:px-6 lg:px-8">
        <SidebarOne />
        <div className="font-sans">
          <Router>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/blog/:id" element={<BlogPostPage />} />
            </Routes>
          </Router>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
