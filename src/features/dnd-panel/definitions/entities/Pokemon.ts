import type { Entity } from "../../types/entities";

export const PokemonEntity: Entity = {
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
      name: "Type",
      key: "type",
      type: "enum",
      description: "The elemental type of the Pokémon.",
      fields: ["string"],
      values: ["Fire", "Water", "Grass", "Electric", "Psychic", "Normal"],
    },
    {
      name: "Level",
      key: "level",
      type: "number",
      description: "The level of the Pokémon.",
    },
    {
      name: "Is Shiny",
      key: "isShiny",
      type: "boolean",
      description: "Whether the Pokémon is a shiny variant.",
    },
    {
      name: "Caught At",
      key: "caughtAt",
      type: "date",
      description: "The date when the Pokémon was caught.",
    },
  ],
};
