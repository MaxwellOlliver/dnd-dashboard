import { Button } from '@/components/ui/button';
import { Save } from 'lucide-react';
import { useDashboardContext } from '../../hooks/use-dashboard-context';
import { v4 as uuidv4 } from 'uuid';
import { PokeApi } from '../../definitions/datasources';
import { TableTool, tools } from '../../definitions/tools';
import { DynamicIcon } from 'lucide-react/dynamic';

export const ToolBox = () => {
  const { dashboardInstance } = useDashboardContext();

  return (
    <div className="h-full w-full rounded-md bg-input/30 border flex items-center justify-center">
      <Button
        variant="outline"
        onClick={() =>
          dashboardInstance.addComponent({
            id: uuidv4(),
            title: 'New component',
            dataSourceId: PokeApi.id,
            toolId: TableTool.id,
            layout: {
              cols: 4,
              rows: 2,
            },
            state: {},
          })
        }
      >
        <Save />
        Salvar
      </Button>
      {tools.map((tool) => (
        <Button key={tool.id} variant="outline" onClick={() => {}}>
          <DynamicIcon name={tool.icon} />
          {tool.name}
        </Button>
      ))}
    </div>
  );
};
