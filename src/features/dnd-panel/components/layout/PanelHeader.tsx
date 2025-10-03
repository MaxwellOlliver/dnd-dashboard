import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/ui/date-picker";
import { RefreshCcw, Save } from "lucide-react";
import { useState } from "react";

export const PanelHeader = () => {
  const [date, setDate] = useState<Date>(new Date());

  return (
    <div className="h-full w-full bg-card rounded-md col-span-2 row-span-1 flex items-center justify-end gap-2">
      <DatePicker date={date} setDate={setDate} />
      <Button>
        <RefreshCcw />
        Atualizar
      </Button>
      <div className="w-px h-full bg-border" />
      <Button variant="outline">
        <Save />
        Salvar
      </Button>
    </div>
  );
};
