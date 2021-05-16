import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';

const Stack = createStackNavigator();

function App() {
  return (
    // <SearchScreen />
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Business Search"
          component={SearchScreen}
          options={{
            headerStyle: {
              backgroundColor: '#e24646',
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Food Details"
          component={ResultsShowScreen}
          options={{
            headerStyle: {
              backgroundColor: '#e24646',
            },
            headerTintColor: '#fff',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
