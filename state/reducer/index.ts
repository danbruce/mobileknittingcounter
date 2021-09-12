import { AddProjectAction, addProject } from "./addProject";
import { State } from "../types";

type Action = AddProjectAction;

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADD PROJECT':
      return addProject(state, action);
  }
};
