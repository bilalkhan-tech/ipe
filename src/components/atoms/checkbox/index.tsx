import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

type IProps = {
  label?: string | number;
  checked?: boolean;
  children?: JSX.Element | JSX.Element[];
  onPress: () => void;
  containerStyle: {};
  iconColor?: string;
};
export const Checkbox = (props: IProps) => {
  const {checked, onPress, containerStyle, iconColor = colors.primary} = props;
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor: checked ? colors.green : colors.white,
          borderWidth: checked ? 0 : 1,
        },
        containerStyle,
      ]}
      onPress={onPress}>
      {checked && <Icon name={'check'} color={iconColor} size={mvs(15)} />}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.primary,
    borderRadius: mvs(4),
    height: mvs(20),
    width: mvs(20),
    margin: mvs(1),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
