import React, { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

const App = lazy(() => import("./App")); // Requires default export in App.js

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
  </BrowserRouter>
);
