import * as datasources from "../definitions/datasources";

export const datasourcesById = {
  [datasources.PokeApi.id]: datasources.PokeApi,
} as const;

type DataSourcesById = typeof datasourcesById;

export function getDataSourceById<K extends keyof DataSourcesById>(id: K) {
  return datasourcesById[id];
}
