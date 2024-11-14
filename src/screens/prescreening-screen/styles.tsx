import {StyleSheet} from 'react-native';
import {colors} from '../../config/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.white,
  },
  pageHeader: {
    marginBottom: 10,
  },
  pageHeaderText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1E90FF',
  },
  searchInput: {
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 8,
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
    marginTop: 10,
  },
  paginationButton: {
    fontSize: 16,
    color: '#1E90FF',
  },
  disabledButton: {
    color: '#ccc',
  },
  pageNumber: {
    fontSize: 16,
  },
});
export default styles;
