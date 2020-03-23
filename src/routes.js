import * as React from 'react';
import { StatusBar } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from '~/pages/SignIn';
import Delivery from '~/pages/Delivery';
import Profile from '~/pages/Profile';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

export default function createRouter(isSigned = false) {
  return !isSigned ? (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="SignIn" component={SignIn} />
      </Stack.Navigator>
    </>
  ) : (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
      <Tabs.Navigator
        tabBarOptions={{
          activeTintColor: '#8d41a8',
          inactiveTintColor: '#ccc',
          labelStyle: {
            fontSize: 15,
          },
          style: {
            backgroundColor: '#fff',
          },
          keyboardHidesTabBar: true,
        }}
      >
        <Tabs.Screen
          name="Dashboard"
          component={Delivery}
          options={{
            tabBarLabel: 'Entregas',
            tabBarIcon: ({ color }) => (
              <Icon name="menu" size={30} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="Perfil"
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color }) => (
              <Icon name="person" size={30} color={color} />
            ),
          }}
        />
      </Tabs.Navigator>
    </>
  );
}
