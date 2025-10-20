import { lazy } from "react";
import type { Tool } from "../../types/tools";

export const TableTool: Tool = {
  name: "Table",
  icon: "table",
  params: [],
  component: lazy(() => import("../../components/tools/Table")),
  categories: ["data display", "visualization"],
  description: "A tool to display data in a tabular format.",
  id: "table-tool",
};
