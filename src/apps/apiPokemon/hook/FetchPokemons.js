import { useState } from "react";
import axios from "axios";


export const FetchPokemons= () => {

  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e, pokemon) => {
    e.preventDefault();

    setData(null);
    setError(false);
    setIsLoading(true);

    try {
      const selectedPokemon = pokemon.toLowerCase().trim();
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`
      )
      setData(data);
    } catch (error) {
      setError('No existe un pokemon con ese numero o nombre');
    }
    setIsLoading(false);
  }

  return { data, isLoading, error, handleSubmit };
}