import { Hand } from "lucide-react";
import { useDashboardState } from "../../hooks/use-dashboard-state";
import { cn } from "@/utils/cn";
import { ComponentRenderer } from "./ComponentRenderer";

export const MainPanel = () => {
  const { components } = useDashboardState();

  return (
    <div
      className={cn(
        "h-full w-full max-w-[76rem] rounded-md pr-4 flex items-center justify-center gap-4",
        "grid grid-cols-4 auto-rows-[18rem] overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-card dark:[&::-webkit-scrollbar-thumb]:bg-input"
      )}
    >
      {components.map((component) => (
        <ComponentRenderer key={component.id} component={component} />
      ))}
      {components.length === 0 && (
        <span className="flex flex-col items-center justify-center gap-2 text-muted-foreground col-span-full">
          <Hand />
          Arraste e solte os elementos para criar seu painel
        </span>
      )}
    </div>
  );
};
