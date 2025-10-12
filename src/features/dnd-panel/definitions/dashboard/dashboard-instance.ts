export type DashboardState = {
  title: string;
  description?: string;
  components: unknown[];
};

type Listener = () => void;

export type DashboardInstance = {
  state: DashboardState;

  getState: () => DashboardState;
  getInstance: () => DashboardInstance;
  getTitle: () => string;
  getDescription: () => string | undefined;

  setTitle: (title: string) => void;
  setDescription: (description: string) => void;

  // EV
  subscribe(fn: Listener): () => void;
};

export function createDashboardInstance(): DashboardInstance {
  let state: DashboardState = {
    components: [],
    title: "",
    description: undefined,
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

    subscribe(fn) {
      listeners.add(fn);
      return () => listeners.delete(fn);
    },
  };

  return instance;
}
