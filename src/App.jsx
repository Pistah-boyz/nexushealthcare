import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { Container, Loader, ErrorBoundary } from "./ui";
import { Dashboard } from "./components/auth/Dashboard";
import About from "./components/About";
import Career from "./components/Career";
import Contact from "./components/Contact";

const App = () => {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="*" exact element={<Dashboard />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/career" exact element={<Career />} />
        <Route path="/contact" exact element={<Contact />} />
      </Routes>
    </ErrorBoundary>
  );
};

export { App };
