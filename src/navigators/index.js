import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  ForgotPasswordScreen,
  SigninScreen,
  SignupScreen,
  SplashScreen,
  WelcomeScreen,
} from '../screens';
import Login from '../Login';
import Signup from '../Signup';
import RegisterPhoneScreen from '../screens/RegisterPhoneScreen';
import VerificationScreen from '../screens/VerificationScreen';
import Home from '../Home';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

const Navigators = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name="Splash" component={SplashScreen} /> */}
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="Home" component={Home} />
        {/* <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} /> */}
        {/* <Stack.Screen name="Signup" component={Signup} /> */}
        <Stack.Screen name="SigninScreen" component={SigninScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen
          name="ForgotPasswordScreen"
          component={ForgotPasswordScreen}
        />
        <Stack.Screen
          name="RegisterPhoneScreen"
          component={RegisterPhoneScreen}
        />
        <Stack.Screen
          name="VerificationScreen"
          component={VerificationScreen}
        />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigators;
