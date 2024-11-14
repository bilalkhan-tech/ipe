import React, {useEffect} from 'react';
import {LoaderSvg, LogoSvg} from '../../assets/icons/user';
import GradientBackground from '../../components/atoms/linear-gradient';
import {colors} from '../../config/colors';
import Light from '../../typography/light-text';
import {StatusBar, View} from 'react-native';
import {mvs} from '../../config/metrices';
import styles from './styles';

const Splash = ({navigation}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('OnboardingScreen');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <GradientBackground
      colors={['#00A4CC', '#0047AB']}
      style={styles.container}>
      <View style={{marginTop: mvs(180)}} />
      <LogoSvg color={colors.white} />
      <Light
        label={'AI Powered Interview App'}
        color={colors.white}
        style={{marginTop: mvs(100), marginBottom: mvs(100)}}
      />
      <LoaderSvg />
    </GradientBackground>
  );
};

export default Splash;
