import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { Container, Loader, ErrorBoundary } from "./ui";
import { Dashboard } from "./components/auth/Dashboard";

const App = () => {
  return (
    <ErrorBoundary>
      <Container maxWidth={"xl"}>
        <Routes>
          <Route path="*" element={<Dashboard />} />
        </Routes>
      </Container>
    </ErrorBoundary>
  );
};

export { App };
