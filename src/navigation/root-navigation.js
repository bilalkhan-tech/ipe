// In App.js in a new project
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors} from '../config/colors';
import ForgotPassword from '../screens/forgot-password';
import OnboardingScreen from '../screens/on-boarding';
import PrescreeningCandidates from '../screens/prescreening-candidates';
import RecruitmentDashboard from '../screens/recruitment-dashboard';
import SelectUserType from '../screens/select-user-type';
import SignIn from '../screens/sign-in';
import SignUp from '../screens/sign-up';
import SignUpOrLogin from '../screens/signup-or-login';
import Splash from '../screens/splash';

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
        backgroundColor={colors.black}
        barStyle={'light-content'}
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
          name="PrescreeningCandidates"
          component={PrescreeningCandidates}
        />
        <Stack.Screen
          name="RecruitmentDashboard"
          component={RecruitmentDashboard}
        />
        <Stack.Screen
          name="SignUpOrLogin"
          component={SignUpOrLogin}
          options={{statusBarHidden: true}}
        />
      </Stack.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});
