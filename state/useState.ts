import { useCallback, useMemo, useReducer } from 'react';

import { reducer } from './reducer';
import { Actions, State } from './types';

const DEFAULT_STATE: State = {
  activeProject: null,
  projectOrder: ['firstProject'],
  projects: {
    firstProject: {
      counters: [
        {
          label: 'First Counter',
          value: 0,
        }
      ],
      id: 'firstProject',
      name: 'First Project',
    }
  },
};

export type UseState = Readonly<{
  actions: any;
  state: State;
}>;

export const useState = (): UseState => {
  const [state, dispatch] = useReducer(reducer, DEFAULT_STATE);
  const actions: Actions = {
    addProject: useCallback((name:string) => {
      dispatch({
        name,
        type: 'ADD PROJECT',
      });
    }, []),
  };
  return useMemo(() => ({
    actions,
    state,
  }), [actions, state]);
};
