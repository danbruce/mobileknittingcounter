import { State } from "../types";

export type IncrementCounterAction = Readonly<{
  counterIndex: number;
  projectId: string;
  type: 'INCREMENT',
}>;

export const incrementCounter = (state: State, action: IncrementCounterAction): State => {
  const { counterIndex, projectId } = action;
  const { activeProject, projects } = state;

  if (activeProject !== projectId) {
    console.warn('Incrementing counter on non-active project.');
  }

  if (!(projectId in projects)) {
    console.warn('Project ID not found in list of projects.');
    return state;
  }

  const project = projects[projectId];
  if (!(counterIndex in project.counters)) {
    console.warn('Counter index out of range of project counters.');
    return state;
  }

  const counter = project.counters[counterIndex];
  return {
    ...state,
    projects: {
      ...projects,
      [project.id]: {
        ...project,
        counters: [
          ...project.counters.slice(0, counterIndex),
          {
            ...counter,
            value: counter.value + 1,
          },
          ...project.counters.slice(counterIndex + 1),
        ]
      }
    }
  };
};
