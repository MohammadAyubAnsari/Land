// // import { useState } from "react";
// import "./App.css";
// import Calculator from "./App/Calculator";
// import Calculatorft from "./App/Calculatorft";

// const App = () => {
//   return
//   (
// <Calculator />
//     <Calculatorft />
//   )
// };
// export default App;

// import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Calculator from "./App/Calculator";
import Calculatorft from "./App/Calculatorft";

const App = () => {
  return (
    <Router>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h1>Land Area Calculator</h1>
        <nav>
          <Link to="/" style={{ margin: "10px" }}>
            Calculator (in Kaddi)
          </Link>
          <Link to="/calculatorft" style={{ margin: "10px" }}>
            Calculator (in Feet)
          </Link>
        </nav>
        <hr />
        <Routes>
          <Route path="/" element={<Calculator />} />
          <Route path="/calculatorft" element={<Calculatorft />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
