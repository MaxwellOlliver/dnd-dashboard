import { cn } from '@/utils/cn';
import type { Component } from '../../types/component';
import { Suspense } from 'react';
import { getToolComponent } from '../../helpers/tools-helper';
import { getEntityById } from '../../helpers/entity-helper';
import { getDataSourceById } from '../../helpers/datasource-helper';
import { Edit2, Loader2, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useDashboardContext } from '../../hooks/use-dashboard-context';

interface ComponentRendererProps {
  component: Component;
}

export const ComponentRenderer = ({ component }: ComponentRendererProps) => {
  const { title, layout, toolId, state, dataSourceId } = component;

  const { dashboardInstance } = useDashboardContext();

  const ToolComponent = getToolComponent(toolId);
  const dataSource = getDataSourceById(dataSourceId);

  if (!dataSource) return null;
  if (!ToolComponent) return null;

  const entity = getEntityById(dataSource.entityId);

  return (
    <div
      data-slot="component-renderer"
      className={cn(
        'h-full w-full rounded-md bg-card border p-4 flex flex-col gap-4',
      )}
      style={{
        gridColumn: `span ${layout.cols}`,
        gridRow: `span ${layout.rows}`,
      }}
    >
      <header className="flex items-center justify-between">
        <h4 className="text-lg font-semibold">{title}</h4>
        <div className="flex gap-2">
          <Button
            size="icon"
            variant="destructive"
            onClick={() => dashboardInstance.removeComponent(component.id)}
          >
            <Trash2 />
          </Button>
          <Button size="icon" variant="outline">
            <Edit2 />
          </Button>
        </div>
      </header>
      <Suspense
        fallback={
          <div className="w-full p-4 py-8 flex justify-center">
            <Loader2 className="animate-spin" />
          </div>
        }
      >
        <ToolComponent
          {...state.toolParams}
          component={component}
          entity={entity}
          datasource={dataSource}
        />
      </Suspense>
    </div>
  );
};
