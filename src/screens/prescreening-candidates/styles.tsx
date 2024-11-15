import {StyleSheet} from 'react-native';
import {colors} from '../../config/colors';
import {mvs} from '../../config/metrices';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  btnContainer: {flexDirection: 'row', marginBottom: mvs(50)},
  preOnActiveBtn: {
    width: '50%',
    borderRadius: 0,
    height: mvs(56),
    backgroundColor: colors.primary,
  },
  preOnInActiveBtn: {
    borderRadius: 0,
    width: '50%',
    height: mvs(56),
    backgroundColor: colors.gray,
  },
  activeTxt: {
    color: colors.white,
    borderBottomWidth: mvs(2),
    borderBottomColor: colors.white,
  },
  inActiveTxt: {color: colors.black},

  searchContainer: {marginHorizontal: mvs(30)},
  searchInput: {
    width: '60%',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 8,
  },
  tableContainer: {
    borderColor: colors.grey,
    borderWidth: mvs(1.5),
    marginHorizontal: mvs(12),
    height: mvs(350),
  },
  tableHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#f2f2f2',
    paddingVertical: 10,
  },
  tableHeaderText: {
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 8,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingVertical: 8,
  },
  tableCell: {
    flex: 1,
    textAlign: 'center',
    fontSize: 8,
  },
  paginationControls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
  },
  paginationButton: {
    fontSize: 16,
    color: '#1E90FF',
  },
  disabledButton: {
    color: '#ccc',
  },
  pageNumber: {
    fontSize: 10,
    marginTop: 80,
    textAlign: 'center',
    color: colors.grey,
  },
});
export default styles;
