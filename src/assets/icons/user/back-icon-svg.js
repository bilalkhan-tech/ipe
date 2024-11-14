import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const BackIconSvg = ({color = '#A25EDF', size = 30}) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 35 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M4.7124 19.5H33.9669"
      stroke={color}
      strokeWidth={2.75}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M14.4639 29.253L4.7124 19.5015L14.4639 9.75"
      stroke={color}
      strokeWidth={2.75}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default BackIconSvg;
