import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StateProvider } from './components/StateProvider';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import { Navigation } from './navigation';
import { ProjectsList } from './screens/ProjectsList';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <StateProvider>
          {({ actions, state}) => (
            <>
              <Navigation
                colorScheme={colorScheme}
                renderProjectList={() => (
                  <ProjectsList actions={actions} state={state} />
                )}
              />
              <StatusBar />
            </>
          )}
        </StateProvider>
      </SafeAreaProvider>
    );
  }
}
