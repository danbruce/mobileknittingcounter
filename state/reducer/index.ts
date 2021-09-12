import { AddProjectAction, addProject } from "./addProject";
import { IncrementCounterAction, incrementCounter } from './incrementCounter';
import { State } from "../types";

type Action =
  | AddProjectAction
  | IncrementCounterAction
;

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADD PROJECT':
      return addProject(state, action);
    case 'INCREMENT':
      return incrementCounter(state, action);
  }
};
