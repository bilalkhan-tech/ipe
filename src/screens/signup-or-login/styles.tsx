import {StyleSheet} from 'react-native';
import {colors} from '../../config/colors';
import {mvs, width} from '../../config/metrices';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: mvs(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  descTxt: {textAlign: 'center', width: mvs(267), marginVertical: mvs(100)},
  candidateBtn: {
    marginHorizontal: mvs(20),
    borderRadius: mvs(50),
    marginBottom: mvs(20),
  },
  candidateTxt: {
    color: colors.white,
  },
  recruiterBtn: {
    marginHorizontal: mvs(20),
    borderRadius: mvs(50),
    backgroundColor: colors.white,
    borderWidth: mvs(1.5),
    borderColor: colors.secondary,
  },
  recruiterTxt: {
    color: colors.black,
  },
});
export default styles;
