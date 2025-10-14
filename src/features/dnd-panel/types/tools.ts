import type { IconName } from "lucide-react/dynamic";
import type { JSX } from "react/jsx-dev-runtime";
import type { Field } from "./entities";

export type Tool = {
  id: string;
  name: string;
  icon: IconName;
  component: React.LazyExoticComponent<() => JSX.Element>;
  categories?: string[];
  description?: string;
  params: Field[];
};
