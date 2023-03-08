import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import history from "./common/history";
import "./index.css";
import { AppShell, queryClient } from './ui'
import { App } from './App'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <Router history={history}>
                <AppShell><App /></AppShell>
                <ReactQueryDevtools initialIsOpen={false} />
            </Router>
        </QueryClientProvider>
    </React.StrictMode>
);
