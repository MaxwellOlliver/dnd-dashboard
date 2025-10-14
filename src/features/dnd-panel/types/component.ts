export type Component = {
  id: string;
  toolId: string;
  dataSourceId: string;
  title: string;
  state: ComponentState;
  layout: ComponentLayout;
};

export type ComponentState = {
  dataSourceParams: Record<string, unknown>;
  toolParams: Record<string, unknown>;
};

export type ComponentLayout = {
  cols: number;
  rows: number;
  minCols?: number;
  maxCols?: number;
  minRows?: number;
  maxRows?: number;
};
