import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import App from "./App.tsx";
import "./assets/style/global.css";

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <Router>
        <App />
      </Router>
    </QueryClientProvider>
  </React.StrictMode>
);
