import type { IconName } from "lucide-react/dynamic";
import type { JSX, LazyExoticComponent } from "react";
import type { Component } from "./component";
import type { DataSource } from "./data-sources";

export const FIELD_TYPE = {
  STRING: "string",
  NUMBER: "number",
  ENUM: "enum",
  BOOLEAN: "boolean",
  DATE: "date",
  CUSTOM: "custom",
};

export type FieldType = (typeof FIELD_TYPE)[keyof typeof FIELD_TYPE];

export type CustomFieldProps = {
  value: any;
  onChange: (value: any) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus: (e: React.FocusEvent<HTMLInputElement>) => void;

  component: Component;
  entity: Entity;
  datasource: DataSource;
};

export type Field<FieldName = string> =
  | {
      name: FieldName;
      type: FieldType;
      key: string;
      description?: string;
    }
  | {
      name: FieldName;
      type: "enum";
      key: string;
      description?: string;
      values: string[];
    }
  | {
      name: FieldName;
      type: "custom";
      key: string;
      description?: string;
      component: LazyExoticComponent<(props: CustomFieldProps) => JSX.Element>;
    };

export type Entity = {
  id: string;
  name: string;
  description: string;
  icon: IconName;
  color: string;
  fields: Field[];
};
