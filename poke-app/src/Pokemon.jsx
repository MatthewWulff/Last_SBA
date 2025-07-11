import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

export default function Pokemon() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    async function getPokemon() {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = await res.json();
      setPokemon(data);
    }

    getPokemon();
  }, [name]);

    if (!pokemon) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} />
    </>
  );
}
