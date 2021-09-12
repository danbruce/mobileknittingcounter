import uniqid from 'uniqid';

import { State } from "../types";

export type AddProjectAction = {
  name: string;
  type: 'ADD PROJECT';
};

export const addProject = (state: State, action: AddProjectAction): State => {
  let id = '';
  // generate a unique ID
  do {
    id = uniqid();
  } while (id in state.projects);

  return {
    activeProject: id,
    projectOrder: [
      ...state.projectOrder,
      id,
    ],
    projects: {
      ...state.projects,
      [id]: {
        counters: [
          {
            label: 'Counter',
            value: 0,
          }
        ],
        id,
        name: action.name,
      },
    },
  }
};
