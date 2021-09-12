import * as React from 'react';

import { useState, UseState } from '../state/useState';

type Props = Readonly<{
  children: (args: UseState) => React.ReactElement;
}>;

export const StateProvider: React.FC<Props> = (props) => {
  const { children } = props;
  const childArgs = useState();
  return children(childArgs);
};
