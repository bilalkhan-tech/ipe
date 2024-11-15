import {Formik} from 'formik';
import React, {useState} from 'react';
import {StatusBar, Text, View} from 'react-native';
import * as Yup from 'yup';
import {
  CurrentJobIconSvg,
  LockIconSvg,
  MailIconSvg,
  NameIconSvg,
  OpenEyeIconSvg,
  UserIDIconSvg,
} from '../../assets/icons/user';
import {KeyboardAvoidScrollview} from '../../components/atoms/keyboard-avoid-scrollview';
import PrimaryButton from '../../components/carts/button';
import CustomTextInput from '../../components/carts/customTextInput';
import {LinkedInCard} from '../../components/molicules/linkedin-card';
import {colors} from '../../config/colors';
import Bold from '../../typography/bold-text';
import Regular from '../../typography/regular-text';
import styles from './styles';
import {mvs, width} from '../../config/metrices';

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required('Name is required'),
  userId: Yup.string().required('User ID is required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email Address is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const SignIn = ({navigation}) => {
  const [candidate, setCandidate] = useState(true);

  const handleFormSubmit = values => {
    console.log('Form Values:', values);
  };

  return (
    <KeyboardAvoidScrollview>
      <StatusBar backgroundColor={colors.white} />
      <Formik
        initialValues={{
          fullName: '',
          userId: '',
          email: '',
          password: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View style={styles.container}>
            <Bold label={'Welcome Back!'} style={styles.title} />
            <CustomTextInput
              leftIcon={<NameIconSvg />}
              placeholder="User ID"
              value={values.userId}
              onChangeText={handleChange('userId')}
              onBlur={handleBlur('userId')}
              error={touched.userId && errors.userId}
            />
            <CustomTextInput
              leftIcon={<CurrentJobIconSvg />}
              placeholder={candidate ? 'Candidate Name' : 'Recruiter Name'}
              value={values.fullName}
              onChangeText={handleChange('fullName')}
              onBlur={handleBlur('fullName')}
              error={touched.fullName && errors.fullName}
            />
            <CustomTextInput
              leftIcon={<MailIconSvg />}
              placeholder="Email Address"
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              error={touched.email && errors.email}
            />

            <CustomTextInput
              leftIcon={<LockIconSvg />}
              rightIcon={<OpenEyeIconSvg />}
              placeholder="Password"
              value={values.password}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              secureTextEntry
              error={touched.password && errors.password}
            />

            <View
              style={{
                justifyContent: 'flex-end',
              }}>
              <Regular
                onPress={() => navigation.navigate('ForgotPassword')}
                style={styles.forgetTxt}
                label={'Forgot Password?'}
              />
            </View>
            <PrimaryButton
              onclick={() => navigation.navigate('RecruitmentDashboard')}
              label="Login"
              height={56}
              style={styles.loginBtn}
              textStyle={styles.loginText}
            />
            <LinkedInCard
              onPress={() => navigation.navigate('SignUp')}
              onLinkedinPress={() => {}}
              text1={'Create an Account'}
              text2={'Sign Up'}
            />
          </View>
        )}
      </Formik>
    </KeyboardAvoidScrollview>
  );
};

export default SignIn;
