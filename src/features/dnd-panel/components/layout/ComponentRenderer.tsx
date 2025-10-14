import { cn } from "@/utils/cn";
import type { Component } from "../../types/component";

interface ComponentRendererProps {
  component: Component;
}

export const ComponentRenderer = ({ component }: ComponentRendererProps) => {
  return (
    <div
      className={cn("h-full w-full rounded-md bg-card border p-4")}
      style={{
        gridColumn: `span ${component.layout.cols}`,
        gridRow: `span ${component.layout.rows}`,
      }}
    >
      {component.title}
    </div>
  );
};
