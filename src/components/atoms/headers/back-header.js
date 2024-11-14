import {ArrowIconLeft} from 'assets/icons';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import {goBack} from 'navigation/navigation-ref';
import React, {memo} from 'react';
import {TouchableOpacity, View} from 'react-native';
import Medium from 'typography/medium-text';
import {Row} from '../row';
import {BackIconSvg} from 'assets/icons/user';
const BackHeader = ({title, bgColor = colors.white, back = true}) => {
  return (
    <Row
      style={{
        backgroundColor: bgColor,
        borderBottomRightRadius: mvs(15),
        borderBottomLeftRadius: mvs(15),
        paddingVertical: mvs(15),
      }}>
      {back && (
        <TouchableOpacity
          onPress={() => goBack()}
          style={{marginLeft: mvs(15)}}>
          <BackIconSvg />
        </TouchableOpacity>
      )}
      <Medium color={colors.white} fontSize={mvs(16)} label={title} />

      <View />
    </Row>
  );
};
export default memo(BackHeader);
