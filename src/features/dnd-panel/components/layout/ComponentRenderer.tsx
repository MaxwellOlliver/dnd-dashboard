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

  const entity = getEntityById(dataSource.entityId);

  return (
    <div
      data-slot="component-renderer"
      className={cn(
        "h-full w-full rounded-md bg-card border p-4 flex flex-col gap-4",
      )}
      style={{
        gridColumn: `span ${layout.cols}`,
        gridRow: `span ${layout.rows}`,
      }}
    >
      <header>
        <h4 className="text-lg font-semibold">{title}</h4>
      </header>

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
