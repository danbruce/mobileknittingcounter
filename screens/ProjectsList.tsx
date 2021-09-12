import * as React from 'react';
import { Text, View } from '../components/Themed';

import { Actions, State } from '../state/types';

type Props = Readonly<{
  actions: Actions;
  state: State;
}>;

export const ProjectsList: React.FC<Props> = (props) => {
  const { state } = props;

  if (state.projectOrder.length < 1) {
    return (
      <View>
        <Text>
          No projects found.
        </Text>
      </View>
    );
  }

  return (
    <View>
      {state.projectOrder.map(projectId => (
        <View key={projectId}>
          <Text>
            {state.projects[projectId].name}
          </Text>
        </View>
      ))}
    </View>
  );
};
