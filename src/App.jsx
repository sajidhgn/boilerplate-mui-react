import React, { lazy, Suspense } from "react";
import "../global.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomLoader from "./components/common/custom-loader";
const Home = lazy(() => import("./views/client/ home"));

export default function App() {
  return (
    <Router>
      <Suspense fallback={<CustomLoader/>}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </Router>
  );
};
