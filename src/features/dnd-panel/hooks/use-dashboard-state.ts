import { useSyncExternalStore } from "react";
import { useDashboardContext } from "./use-dashboard-context";
import type { DashboardState } from "../types/dashboard";

type Selector<T> = (state: DashboardState) => T;

export function useDashboardState<T = DashboardState>(
  selector?: Selector<T>
): T {
  const { dashboardInstance } = useDashboardContext();

  const getSnapshot = () => {
    const state = dashboardInstance.getState();
    return selector ? selector(state) : (state as T);
  };

  return useSyncExternalStore(
    dashboardInstance.subscribe,
    getSnapshot,
    getSnapshot
  );
}
