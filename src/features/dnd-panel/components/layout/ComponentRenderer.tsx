import { cn } from "@/utils/cn";
import type { Component } from "../../types/component";
import { Suspense } from "react";
import { getToolComponent } from "../../helpers/tools-helper";
import { getEntityById } from "../../helpers/entity-helper";
import { getDataSourceById } from "../../helpers/datasource-helper";

interface ComponentRendererProps {
  component: Component;
}

export const ComponentRenderer = ({ component }: ComponentRendererProps) => {
  const { title, layout, toolId, state, dataSourceId } = component;

  const ToolComponent = getToolComponent(toolId);
  const dataSource = getDataSourceById(dataSourceId);

  if (!dataSource) return null;
  if (!ToolComponent) return null;

  const entity = getEntityById(dataSource.id);

  return (
    <div
      className={cn("h-full w-full rounded-md bg-card border p-4")}
      style={{
        gridColumn: `span ${layout.cols}`,
        gridRow: `span ${layout.rows}`,
      }}
    >
      <h4>{title}</h4>

      <Suspense>
        <ToolComponent
          {...state.toolParams}
          component={component}
          entity={entity}
          datasource={dataSource}
        />
      </Suspense>
    </div>
  );
};
