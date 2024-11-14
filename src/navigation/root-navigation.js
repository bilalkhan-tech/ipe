// In App.js in a new project
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Splash from '../screens/splash';
import {colors} from '../config/colors';
import SelectUserType from '../screens/select-user-type';
import SignUpOrLogin from '../screens/signup-or-login';
import OnboardingScreen from '../screens/on-boarding';
import SignIn from '../screens/sign-in';
import PrescreeningScreen from '../screens/prescreening-screen';
import SignUp from '../screens/sign-up';
import ForgotPassword from '../screens/forgot-password';

const Stack = createNativeStackNavigator();

export const RootNavigator = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView
        style={{
          flex: 0,
          backgroundColor: colors.primary,
        }}
      />
      <StatusBar
        translucent={false}
        backgroundColor={colors.white}
        barStyle={'dark-content'}
      />
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{statusBarHidden: true}}
        />
        <Stack.Screen name="SelectUserType" component={SelectUserType} />
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen
          name="PrescreeningScreen"
          component={PrescreeningScreen}
        />
        <Stack.Screen
          name="SignUpOrLogin"
          component={SignUpOrLogin}
          options={{statusBarHidden: true}}
        />

        {/* Main stacks based on roles */}
        {/* <Stack.Group>
          <Stack.Screen name="UserStack" component={UserStack} />
          <Stack.Screen name="SellerStack" component={SellerStack} />
          <Stack.Screen name="DriverStack" component={DriverStack} />
        </Stack.Group> */}
      </Stack.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});
