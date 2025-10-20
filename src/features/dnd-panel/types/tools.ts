import type { IconName } from "lucide-react/dynamic";
import type { Entity, Field } from "./entities";
import type { Component } from "./component";
import type { DataSource } from "./data-sources";

export type ToolProps = {
  entity: Entity;
  datasource: DataSource;
  component: Component;
};

export type ToolComponent<P extends ToolProps = ToolProps> =
  React.ComponentType<P>;

export type Tool = {
  id: string;
  name: string;
  icon: IconName;
  component: React.LazyExoticComponent<ToolComponent>;
  categories?: string[];
  description?: string;
  params: Field[];
};
