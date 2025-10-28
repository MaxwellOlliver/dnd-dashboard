import type { Component } from './component';

export type Dashboard = {
  id: string;
  name: string;
  description?: string;
  components: Component[];
};

export type DashboardState = {
  id: string;
  title: string;
  description?: string;
  components: Component[];
};

export type Listener = () => void;

export type DashboardInstance = {
  state: DashboardState;

  getState: () => DashboardState;
  getInstance: () => DashboardInstance;
  getTitle: () => string;
  getDescription: () => string | undefined;
  getComponents: () => Component[];

  setTitle: (title: string) => void;
  setDescription: (description: string) => void;
  updateComponent: (id: string, data: Omit<Component, 'id'>) => void;
  addComponent: (component: Component) => void;
  removeComponent: (id: string) => void;

  // React Sync State purpose only
  subscribe(fn: Listener): () => void;
};
