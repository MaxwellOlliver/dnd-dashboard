import type { ToolProps } from "../../types/tools";
import { useQuery } from "@tanstack/react-query";

export default function Table({ component, datasource, entity }: ToolProps) {
  console.log(entity);
  const { data } = useQuery({
    enabled: true,
    queryKey: ["table", component.id],
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
    <table className="table-auto border-white/5 border w-full">
      <thead>
        <tr className="bg-white/5">
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
  );
}
