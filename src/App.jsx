import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { Container, Loader, ErrorBoundary } from "./ui";
import { Login } from "./components/auth/login";
import { SignUp } from "./components/auth/signUp";
const RemoteApp = React.lazy(() => import("remote/App"));

const App = () => {
  return (
    <ErrorBoundary>
      <Container maxWidth={"xl"}>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/*" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/remote" element={<RemoteApp />} />
          </Routes>
        </Suspense>
      </Container>
    </ErrorBoundary>
  );
};

export { App };
