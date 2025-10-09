import type { IconName } from "lucide-react/dynamic";
import type { JSX } from "react/jsx-dev-runtime";

export type Tool = {
  name: string;
  icon: IconName;
  component: React.LazyExoticComponent<() => JSX.Element>;
  categories?: string[];
  description?: string;
};
