/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import AppNavigator from './src/navigation/DynamicNavigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';



function App(): React.JSX.Element {
  return(
    <SafeAreaProvider>
      <AppNavigator />
    </SafeAreaProvider>
  );
}



export default App;
