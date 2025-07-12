import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [list, setList] = useState([]);

  useEffect(() => {
    async function PokeList() {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
      const list = await res.json();
      setList(list.results);
    }
    PokeList();
  }, []);

  return (
    <div>
      <h1>Pokemon</h1>
      <ul>
        {list.map((pokemon) => (
          <li key={pokemon.name}>
            <Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
