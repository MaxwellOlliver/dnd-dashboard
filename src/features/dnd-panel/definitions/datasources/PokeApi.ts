import type { DataSource } from "../../types/data-sources";
import { PokemonEntity } from "../entities";

export const PokeApi: DataSource = {
  id: "pokeapi",
  name: "PokeAPI",
  description: "Pokémon API",
  entityId: PokemonEntity.id,
  fetch: async ({ limit, offset }) => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`,
    );
    const data = await response.json();

    return data.results.map((pokemon: any) => ({
      id: pokemon.id,
      name: pokemon.name,
      type: pokemon.types.map((type: any) => type.type.name).join(", "),
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`,
    }));
  },
};
