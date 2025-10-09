import type { Tool } from "../types/tools";
import React from "react";

export const tools: Tool[] = [
  {
    name: "Table",
    icon: "table",
    component: React.lazy(() =>
      import("../components/tools/Table").then((mod) => ({
        default: mod.Table,
      }))
    ),
    categories: ["data display", "visualization"],
    description: "A tool to display data in a tabular format.",
  },
];
