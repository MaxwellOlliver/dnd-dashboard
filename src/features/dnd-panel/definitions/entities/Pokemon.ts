import type { Entity } from "../../types/entities";

export const PokemonEntity: Entity = {
  id: "pokemon",
  name: "Pokémon",
  description:
    "A fictional species of creatures that trainers catch and train.",
  icon: "star",
  color: "yellow",
  fields: [
    {
      name: "Name",
      type: "string",
      description: "The name of the Pokémon.",
      key: "name",
    },
    {
      name: "URL",
      type: "string",
      description: "The URL of the Pokémon's official website.",
      key: "url",
    },
  ],
} as const;
