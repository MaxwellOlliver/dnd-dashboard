import type { IconName } from "lucide-react/dynamic";

export const FIELD_TYPE = {
  STRING: "string",
  NUMBER: "number",
  ENUM: "enum",
  BOOLEAN: "boolean",
  DATE: "date",
  RELATION: "relation",
};

export type FieldType = (typeof FIELD_TYPE)[keyof typeof FIELD_TYPE];

export type Field =
  | {
      name: string;
      type: FieldType;
      key: string;
      description?: string;
    }
  | {
      name: string;
      type: "enum";
      key: string;
      description?: string;
      fields: FieldType[];
      values: string[];
    };

export type Entity = {
  id: string;
  name: string;
  description: string;
  icon: IconName;
  color: string;
  fields: Field[];
};
