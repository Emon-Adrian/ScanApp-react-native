/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  Text,
  View,
} from 'react-native';
//import Home from './Home';
import Register from './Pages/Register';
import Profile from './Pages/Profile';
import Login from './Pages/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import Navigator from './routes/HomeRoute';
import tw from 'twrnc';
import Splash from './Pages/Splash';


const Stack = createNativeStackNavigator();

const App: () => Node = () => {
 
  return (
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={Register}
          options={{ title: 'Register' }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ 
            headerShown: false,
           }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ title: 'Profile' }}
        />
      </Stack.Navigator>
    </NavigationContainer>    
  );
};

export default App;
