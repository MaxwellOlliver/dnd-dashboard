import type { Entity } from "./entities";

interface DataSourceFetchParams {
  query?: string;
  limit?: number;
  offset?: number;
}

export type DataSource = {
  name: string;
  description: string;
  fetch: (params: DataSourceFetchParams) => Promise<unknown>;
  entity: Entity;
};
