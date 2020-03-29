import 'react-native-gesture-handler';
import React, { useEffect } from 'react';

import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import SplashScreen from 'react-native-splash-screen';
import FlashMessage from 'react-native-flash-message';

import './config/ReactotronConfig';

import { store, persistor } from './store';

import App from './App';

export default function Index() {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1500);
  }, []);

  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
          <FlashMessage duration={5000} position="top" />
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
}
