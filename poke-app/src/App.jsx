import { Route, Routes } from "react-router-dom";
import Home from "./Home.jsx";
import Pokemon from "./Pokemon.jsx"; 
import "./App.css";

import "./App.css";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pokemon/:name" element={<Pokemon />} />
    </Routes>
  );
}

export default App;
