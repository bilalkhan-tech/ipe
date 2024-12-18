import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const FillRadioBtnSvg = props => (
  <Svg
    width={12}
    height={12}
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M12 6C12 9.31372 9.31372 12 6 12C2.68628 12 0 9.31372 0 6C0 2.68628 2.68628 0 6 0C9.31372 0 12 2.68628 12 6ZM5.30598 9.17695L9.7576 4.72534C9.90876 4.57418 9.90876 4.32907 9.7576 4.17791L9.21017 3.63048C9.05901 3.4793 8.8139 3.4793 8.66272 3.63048L5.03226 7.26092L3.33728 5.56594C3.18612 5.41478 2.94102 5.41478 2.78983 5.56594L2.2424 6.11337C2.09124 6.26453 2.09124 6.50964 2.2424 6.6608L4.75853 9.17693C4.90972 9.32811 5.1548 9.32811 5.30598 9.17695Z"
      fill="#0047AB"
    />
  </Svg>
);
export default FillRadioBtnSvg;
