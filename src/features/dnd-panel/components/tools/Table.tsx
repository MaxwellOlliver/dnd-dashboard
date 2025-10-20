import type { ToolProps } from "../../types/tools";
import { useQuery } from "@tanstack/react-query";

export default function Table({ component, datasource, entity }: ToolProps) {
  const { data } = useQuery({
    enabled: true,
    queryKey: ["table", component.id],
    queryFn: async () => {
      const response = await datasource.fetch(
        component.state.dataSourceParams ?? {
          limit: 10,
          offset: 0,
        },
      )

      return response;
    },
  });

  const columns = entity.fields.map((field) => ({
    name: field.name,
    key: field.key,
  }));

  return (
    <div className="h-full w-full rounded-md bg-input/30 border flex items-center justify-center">
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key}>{column.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.items.map((item) => (
            <tr key={item.id as string}>
              {columns.map((column) => (
                <td key={column.key}>{item[column.key] as string}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
