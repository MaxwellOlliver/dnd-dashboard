import { Button } from "@/components/ui/button";
import { Save } from "lucide-react";
import { useDashboardContext } from "../../hooks/use-dashboard-context";
import { v4 as uuidv4 } from "uuid";

export const ToolBox = () => {
  const { dashboardInstance } = useDashboardContext();

  return (
    <div className="h-full w-full rounded-md bg-input/30 border flex items-center justify-center">
      <Button
        variant="outline"
        onClick={() =>
          dashboardInstance.addComponent({
            id: uuidv4(),
            title: "New component",
            dataSourceId: "",
            toolId: "",
            layout: {
              cols: 1,
              rows: 3,
            },
            state: {},
          })
        }
      >
        <Save />
        Salvar
      </Button>
    </div>
  );
};
