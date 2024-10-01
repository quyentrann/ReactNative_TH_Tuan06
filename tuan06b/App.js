import React from 'react';
import screen01 from './screen/screen01';
import screen02 from './screen/screen02';
import screen03 from './screen/screen03';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import '@expo/metro-runtime'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="screen01">
        {/* <Stack.Screen name="screen01" component={screen01} /> */}
        <Stack.Screen name="screen02" component={screen02} />
        <Stack.Screen name="screen03" component={screen03} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
