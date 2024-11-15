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
import PrescreeningCandidates from '../screens/prescreening-candidates';
import SignUp from '../screens/sign-up';
import ForgotPassword from '../screens/forgot-password';
import RecruitmentDashboard from '../screens/recruitment-dashboard';
import RecruiterProfile from '../screens/recruiter-profile';
import JobPostScreen from '../screens/iob-post-screen';
import TotalJobPost from '../screens/total-job-post';

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
        <Stack.Screen name="RecruiterProfile" component={RecruiterProfile} />
        <Stack.Screen name="JobPostScreen" component={JobPostScreen} />
        <Stack.Screen name="TotalJobPost" component={TotalJobPost} />
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
