import * as entities from "../definitions/entities";

export const entitiesById = {
  [entities.PokemonEntity.id]: entities.PokemonEntity,
} as const;

type EntitiesById = typeof entitiesById;

export function getEntityById<K extends keyof EntitiesById>(id: K) {
  return entitiesById[id];
}
