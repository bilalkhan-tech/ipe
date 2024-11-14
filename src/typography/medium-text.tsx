import React from 'react';
import {ColorValue, StyleProp, StyleSheet, Text, TextStyle} from 'react-native';
import fonts from '../assets/fonts';
import {mvs} from '../config/metrices';
import {colors} from '../config/colors';

type FcProps = {
  label?: string | number;
  numberOfLines?: number;
  fontSize?: number;
  color?: ColorValue | undefined;
  onPress?: (() => void) | undefined;
  style?: StyleProp<TextStyle>;
  children?: any;
};
const Medium: React.FC<FcProps> = ({
  label,
  fontSize,
  color,
  numberOfLines = 1,
  children,
  style,
  ...props
}) => {
  return (
    <Text
      numberOfLines={numberOfLines}
      {...props}
      style={[{...styles.label, color: color, fontSize: fontSize}, style]}>
      {label}
      {children}
    </Text>
  );
};

export default Medium;

const styles = StyleSheet.create({
  label: {
    fontFamily: fonts.medium,
    fontSize: mvs(16),
    color: colors.grey,
  },
});