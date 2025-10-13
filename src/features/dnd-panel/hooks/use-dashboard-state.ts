import { useSyncExternalStore } from "react";
import type { DashboardInstance } from "../definitions/dashboard/dashboard-instance";

export function useDashboardState(dashboardInstance: DashboardInstance) {
  return useSyncExternalStore(
    dashboardInstance.subscribe,
    dashboardInstance.getState
  );
}
