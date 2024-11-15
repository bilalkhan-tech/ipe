import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import Label from './Label';
import {mvs} from '../../config/metrices';
import {colors} from '../../config/colors';
const PrimaryButton = ({
  disabled,
  onclick,
  label = 'click me',
  color = 'white',
  width,
  height = 44,
  style,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={{...styles.main, width: width, height: height, ...style}}
      onPress={onclick}>
      <Label
        label={label}
        size={mvs(20)}
        color={color}
        style={{...textStyle}}
      />
    </TouchableOpacity>
  );
};
export default PrimaryButton;
const styles = StyleSheet.create({
  main: {
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: mvs(10),
  },
});
