import * as React from 'react';

import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ColorSchemeName } from 'react-native';

type Props = Readonly<{
  colorScheme: ColorSchemeName;
  renderProjectList: () => React.ReactElement;
}>;

const Stack = createNativeStackNavigator();

export const Navigation: React.FC<Props> = (props) => {
  const {
    colorScheme,
    renderProjectList,
  } = props;
  return (
    <NavigationContainer theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator>
        <Stack.Screen name="Project List">
          {renderProjectList}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
