import { Route, Routes } from "react-router-dom";
import Home from "./Home.jsx";
import PokemonList from "./Pokemon.jsx"; 
import "./App.css";

import "./App.css";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pokemon/:name" element={<PokemonList />} />
    </Routes>
  );
}

export default App;

