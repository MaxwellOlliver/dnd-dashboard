interface DataSourceFetchParams {
  query?: string;
  limit?: number;
  offset?: number;
}

export type DataSource = {
  id: string;
  name: string;
  description: string;
  fetch: (
    params: DataSourceFetchParams,
  ) => Promise<{ items: any[]; total: number }>;
  entityId: string;
};
