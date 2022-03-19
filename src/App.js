import React from "react";
import "./App.css";
import Create from "./components/Create";
import Read from "./components/Read";
import Update from "./components/Update";
import Main from "./components/Main";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
      <div>
          <Routes>
            <Route exact path="/" element={<Main />} />
          </Routes>
        </div>
        <div>
          <Routes>
            <Route exact path="/create" element={<Create />} />
          </Routes>
        </div>
        <div>
          <Routes>
            <Route exact path="/read" element={<Read />} />
          </Routes>
        </div>
        <div>
          <Routes>
            <Route exact path="/update" element={<Update />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
