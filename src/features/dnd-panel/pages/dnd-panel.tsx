import { cn } from "@/utils/cn";
import { MainPanel } from "../components/layout/MainPanel";
import { PanelHeader } from "../components/layout/PanelHeader";
import { ToolBox } from "../components/layout/ToolBox";
import { DashboardProvider } from "../context/dashboard-context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export const DndPanel = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <DashboardProvider
        json={JSON.stringify({
          id: "1",
          title: "Dashboard",
          description: "Dashboard description",
          components: [],
        })}
      >
        <div
          className={cn(
            "h-screen w-screen flex items-center justify-center p-8",
          )}
        >
          <div
            className={cn(
              "rounded-md grid grid-cols-[minmax(0,76rem)_minmax(0,24rem)] h-full grid-rows-[auto_minmax(0,1fr)]",
              "bg-card border p-4 gap-4",
            )}
          >
            <PanelHeader />
            <MainPanel />
            <ToolBox />
          </div>
        </div>
      </DashboardProvider>
    </QueryClientProvider>
  );
};
