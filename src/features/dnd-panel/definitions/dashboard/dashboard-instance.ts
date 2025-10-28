import { v4 as uuidv4 } from 'uuid';
import type {
  DashboardInstance,
  DashboardState,
  Listener,
} from '../../types/dashboard';

export function createDashboardInstance(): DashboardInstance {
  let state: DashboardState = {
    components: [],
    title: 'New dashboard',
    description: undefined,
    id: uuidv4(),
  };
  const listeners = new Set<Listener>();

  const notify = () => {
    for (const fn of listeners) fn();
  };

  const instance: DashboardInstance = {
    state,

    getInstance() {
      return this;
    },
    getState: () => state,
    getTitle: () => state.title,
    getDescription: () => state.description,
    getComponents: () => state.components,

    setTitle: (title: string) => {
      state = {
        ...state,
        title,
      };
      notify();
    },
    setDescription: (description: string) => {
      state = {
        ...state,
        description,
      };
      notify();
    },

    updateComponent: (id, data) => {
      state = {
        ...state,
        components: state.components.map((component) =>
          component.id === id ? { ...component, ...data } : component,
        ),
      };
      notify();
    },
    addComponent: (component) => {
      state = {
        ...state,
        components: [...state.components, component],
      };
      notify();
    },
    removeComponent: (id) => {
      state = {
        ...state,
        components: state.components.filter((component) => component.id !== id),
      };
      notify();
    },

    subscribe(fn) {
      listeners.add(fn);
      return () => listeners.delete(fn);
    },
  };

  return instance;
}
