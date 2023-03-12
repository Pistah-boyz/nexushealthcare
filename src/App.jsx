import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { Container, Loader, ErrorBoundary } from "./ui";
import { Dashboard } from "./components/auth/Dashboard";
import About from "./components/About";
import Career from "./components/Career";
import Contact from "./components/Contact";
import HealthcareJobSeekers from "./components/HealthcareJobSeekers";
import HealthcareFacilities from "./components/HealthcareFacilities";

const App = () => {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="*" exact element={<Dashboard />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/career/:pagename" element={<Career />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route
          path="/healthcarejobseekers"
          exact
          element={<HealthcareJobSeekers />}
        />
        <Route
          path="/healthcarefacilities"
          exact
          element={<HealthcareFacilities />}
        />
      </Routes>
    </ErrorBoundary>
  );
};

export { App };
