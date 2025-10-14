import type { Component } from "react";

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

  // EV
  subscribe(fn: Listener): () => void;
};
