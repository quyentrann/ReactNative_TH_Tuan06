import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import '@expo/metro-runtime';
import screen4a from './screen/screen4a';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Entypo, FontAwesome, Ionicons } from '@expo/vector-icons';
import screen4b from './screen/screen4b';
import { TextInput } from 'react-native-web';

const Tab = createBottomTabNavigator();

// export default screen4b;

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#1BA9FF' },
          tabBarStyle: { backgroundColor: '#1BA9FF' },
          headerTitleAlign: 'center',
          headerLeft: () => (
            <AntDesign name="arrowleft" size={24} color="black" />
          ),
          headerRight: () => (
            <AntDesign name="shoppingcart" size={24} color="black" />
          ),
          tabBarShowLabel: false,
        }}>
        <Tab.Screen
          name="Chat"
          component={screen4a}
          options={{
            tabBarIcon: () => (
              <Ionicons name="menu-outline" size={24} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="Home"
          component={screen4b}
          options={{
            tabBarIcon: () => <AntDesign name="home" size={24} color="black" />,
            tabBarLabel: null,
            headerLeft: () => (
              <AntDesign name="arrowleft" size={24} color="white" />
            ),
            headerRight: () => (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginRight: 10,
                }}>
                <AntDesign
                  name="shoppingcart"
                  size={24}
                  color="white"
                  style={{ marginRight: 15 }}
                />
                <AntDesign name="ellipsis1" size={24} color="white" />
              </View>
            ),
            headerTitle: () => (
              <View style={{ flexDirection: 'row', alignItems: 'center' , marginRight:23}}>
                <TextInput
                  placeholder="Dây cáp usb"
                  style={{
                    height: 40,
                    width: 300,
                    backgroundColor: 'white',
                    paddingLeft: 30,
                    fontSize:18,
                    color:'gray',
                  }}
                />
                <FontAwesome name="search" size={24} color="black" style={{ position: 'absolute', right: 180 }}/>
               
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Back"
          component={screen4a}
          options={{
            tabBarIcon: () => <Entypo name="back" size={24} color="black" />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
