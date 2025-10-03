import { Hand } from "lucide-react";

export const MainPanel = () => {
  return (
    <div className="h-full w-full max-w-[76rem] rounded-md  flex items-center justify-center">
      <span className="flex flex-col items-center justify-center gap-2 text-muted-foreground">
        <Hand />
        Arraste e solte os elementos para criar seu painel
      </span>
    </div>
  );
};
