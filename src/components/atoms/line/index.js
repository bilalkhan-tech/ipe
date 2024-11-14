import {mvs} from 'config/metrices';
import {View} from 'react-native';
import React from 'react';
import {colors} from 'config/colors';
const Line = ({marginVertical = 0, bgColor = colors.CCCCCC}) => {
  return (
    <View
      style={{
        backgroundColor: bgColor,
        height: mvs(1),
        marginVertical: marginVertical,
      }}
    />
  );
};
export default Line;
