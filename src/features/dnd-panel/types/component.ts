import type { ToolProps } from "./tools";

export type Component = {
  id: string;
  toolId: string;
  dataSourceId: string;
  title: string;
  state: ComponentState;
  layout: ComponentLayout;
};

export type ComponentState = {
  dataSourceParams?: Record<string, unknown>;
  toolParams?: ToolProps;
};

export type ComponentLayout = {
  cols: number;
  rows: number;
  minCols?: number;
  maxCols?: number;
  minRows?: number;
  maxRows?: number;
};
