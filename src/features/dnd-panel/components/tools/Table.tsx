import type { ToolProps } from '../../types/tools';
import { useQuery } from '@tanstack/react-query';
import {
  Table as TableRoot,
  TableBody,
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
} from '@/components/ui/table';

export default function Table({ component, datasource, entity }: ToolProps) {
  console.log(component.id, 'rendered');
  const { data } = useQuery({
    enabled: true,
    queryKey: ['table', component.id],
    queryFn: async () => {
      const response = await datasource.fetch(
        component.state.dataSourceParams ?? {
          limit: 10,
          offset: 0,
        },
      );

      return response;
    },
  });

  const columns = entity.fields.map((field) => ({
    name: field.name,
    key: field.key,
  }));

  return (
    <TableRoot>
      <TableHeader>
        <TableRow className="bg-white/5">
          {columns.map((column) => (
            <TableHead key={column.key}>{column.name}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.items.map((item) => (
          <TableRow key={item.id as string}>
            {columns.map((column) => (
              <TableCell key={column.key}>
                {item[column.key] as string}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </TableRoot>
  );
}
