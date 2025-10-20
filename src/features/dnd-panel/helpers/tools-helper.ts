import * as tools from "../definitions/tools";

export const toolsById = {
  [tools.TableTool.id]: tools.TableTool.component,
} as const;

type ToolsById = typeof toolsById;

export function getToolComponent<K extends keyof ToolsById>(id: K) {
  return toolsById[id];
}
