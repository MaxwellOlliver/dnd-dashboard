import { createContext, type ReactNode } from "react";
import {
  createDashboardInstance,
  type DashboardInstance,
} from "../definitions/dashboard/dashboard-instance";

type DashboardContext = {
  dashboardInstance: DashboardInstance;
};

// eslint-disable-next-line react-refresh/only-export-components
export const DashboardContext = createContext<DashboardContext | null>(null);

export function DashboardProvider({
  children,
}: {
  children: ReactNode;
  json: string;
}) {
  const dashboardInstance = createDashboardInstance();

  return (
    <DashboardContext.Provider value={{ dashboardInstance }}>
      {children}
    </DashboardContext.Provider>
  );
}
