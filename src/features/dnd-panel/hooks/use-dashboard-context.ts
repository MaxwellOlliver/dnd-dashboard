import { use } from "react";
import { DashboardContext } from "../context/dashboard-context";

export function useDashboardContext() {
  const ctx = use(DashboardContext);

  if (!ctx) {
    throw new Error("No provider for DashboardContext");
  }

  return ctx;
}
