import { useSyncExternalStore } from "react";
import { useDashboardContext } from "./use-dashboard-context";

export function useDashboardState() {
  const { dashboardInstance } = useDashboardContext();

  return useSyncExternalStore(
    dashboardInstance.subscribe,
    dashboardInstance.getState
  );
}
