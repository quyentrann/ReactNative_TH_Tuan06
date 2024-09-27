import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import screen4a from './screen/screen4a';
import '@expo/metro-runtime';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#1BA9FF' },
          tabBarStyle: { backgroundColor: '#1BA9FF' },
          headerLeft: () => (
            <AntDesign name="arrowleft" size={24} color="black" />
          ),
          headerRight: () => (
            <AntDesign name="shoppingcart" size={24} color="black" />
          ),
          headerTitleAlign: 'center',
        }}>
        <Tab.Screen
          name="Chat"
          component={screen4a}
          options={{
            tabBarIcon: () => (
              <FontAwesome name="bars" size={24} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="Chat1"
          component={screen4a}
          options={{
            tabBarIcon: () => (
              <FontAwesome name="bars" size={24} color="black" />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
