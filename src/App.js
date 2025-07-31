import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/movie/:id" element={<DetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
