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

    return {
      items: data.results.map((pokemon: any) => ({
        name: pokemon.name,
        url: pokemon.url,
      })),
      total: data.count,
    };
  },
};
