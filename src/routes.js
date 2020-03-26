import * as React from 'react';
import { StatusBar } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from '~/pages/SignIn';

import Profile from '~/pages/Profile';

import Delivery from '~/pages/Delivery';
import DeliveryDetail from '~/pages/DeliveryDetail';
import ProblemReport from '~/pages/DeliveryDetail/ProblemReport';
import ViewProblems from '~/pages/DeliveryDetail/ViewProblems';
import ConfirmDelivery from '~/pages/DeliveryDetail/ConfirmDelivery';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

function DeliveryScreen() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <Stack.Navigator initialRouteName="Delivery" headerMode="none">
        <Stack.Screen name="Delivery" component={Delivery} />
        <Stack.Screen name="DeliveryDetail" component={DeliveryDetail} />
        <Stack.Screen name="ProblemReport" component={ProblemReport} />
        <Stack.Screen name="ViewProblems" component={ViewProblems} />
        <Stack.Screen name="ConfirmDelivery" component={ConfirmDelivery} />
      </Stack.Navigator>
    </>
  );
}

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
          name="Delivery"
          component={DeliveryScreen}
          options={{
            tabBarLabel: 'Entregas',
            tabBarIcon: ({ color }) => (
              <Icon name="menu" size={30} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="Profile"
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
