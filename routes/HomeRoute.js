import React from 'react'
import { createAppContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Pages/Login';
import Profile from '../Pages/Profile';

const Screens = {
    Home: {
      screen: Home
    },
    Profile: {
      screen: Profile
    },
}

const HomeStack = createNativeStackNavigator(Screens);

export default Screems;


// import React from 'react'
// import { createAppContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Home from '../Pages/Login';
// import Profile from '../Pages/Profile';

// const Screens = {
//     Home: {
//       screen: Home
//     },
//     Profile: {
//       screen: Profile
//     },
// }

// const HomeStack = createNativeStackNavigator(Screens);

// export default createAppContainer(HomeStack)