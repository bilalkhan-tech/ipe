import React, {useEffect, useState} from 'react';
import {FlatList, Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {NextIconSvg, PrevIconSvg} from '../../assets/icons/user';
import {colors} from '../../config/colors';

const PrescreeningScreen = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; // Number of items per page

  // Sample data for the table (15 items to represent multiple pages)
  const allData = [
    {
      id: '1',
      date: 'Feb 11, 2014',
      name: 'Munazza',
      field: 'AI/ML Development',
      status: 'Initial Screening',
    },
    {
      id: '2',
      date: 'Oct 24, 2018',
      name: 'Munazza',
      field: 'UI/UX designing',
      status: 'Final Screening',
    },
    {
      id: '3',
      date: 'May 12, 2019',
      name: 'Munazza',
      field: 'Wordpress',
      status: 'Initial Screening',
    },
    {
      id: '4',
      date: 'Feb 29, 2012',
      name: 'Munazza',
      field: 'AI/ML Development',
      status: 'Initial Screening',
    },
    {
      id: '5',
      date: 'Nov 7, 2017',
      name: 'Munazza',
      field: 'AI/ML Development',
      status: 'Initial Screening',
    },
    {
      id: '6',
      date: 'Dec 19, 2013',
      name: 'Munazza',
      field: 'AI Development',
      status: 'Final Screening',
    },
    {
      id: '7',
      date: 'Feb 11, 2014',
      name: 'Munazza',
      field: 'AI/ML Development',
      status: 'Initial Screening',
    },
    {
      id: '8',
      date: 'Oct 24, 2018',
      name: 'Munazza',
      field: 'AI/ML Development',
      status: 'Initial Screening',
    },
    {
      id: '9',
      date: 'Feb 29, 2012',
      name: 'Munazza',
      field: 'AI/ML Development',
      status: 'Final Screening',
    },
    {
      id: '10',
      date: 'Feb 11, 2014',
      name: 'Munazza',
      field: 'AI/ML Development',
      status: 'Final Screening',
    },
    {
      id: '11',
      date: 'Nov 7, 2017',
      name: 'Munazza',
      field: 'AI/ML Development',
      status: 'Initial Screening',
    },
    {
      id: '12',
      date: 'Dec 19, 2013',
      name: 'Munazza',
      field: 'AI Development',
      status: 'Final Screening',
    },
    {
      id: '13',
      date: 'Feb 11, 2014',
      name: 'Munazza',
      field: 'AI/ML Development',
      status: 'Initial Screening',
    },
    {
      id: '14',
      date: 'Oct 24, 2018',
      name: 'Munazza',
      field: 'AI/ML Development',
      status: 'Final Screening',
    },
    {
      id: '15',
      date: 'Feb 29, 2012',
      name: 'Munazza',
      field: 'AI/ML Development',
      status: 'Initial Screening',
    },
  ];

  // Pagination logic
  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setData(allData.slice(startIndex, endIndex));
  }, [currentPage]);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < Math.ceil(allData.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <View style={styles.container}>
      {/* Page header */}
      <View style={styles.pageHeader}>
        <Text style={styles.pageHeaderText}>Pre Screening</Text>
      </View>

      {/* Search bar */}
      <TextInput placeholder="Search" style={styles.searchInput} />

      {/* Table Header */}
      <View style={styles.tableHeader}>
        <Text style={styles.tableHeaderText}>S.NO.</Text>
        <Text style={styles.tableHeaderText}>DATE</Text>
        <Text style={styles.tableHeaderText}>NAME</Text>
        <Text style={styles.tableHeaderText}>FIELD</Text>
        <Text style={styles.tableHeaderText}>STATUS</Text>
      </View>

      {/* Data Table */}
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>{item.id}</Text>
            <Text style={styles.tableCell}>{item.date}</Text>
            <Text style={styles.tableCell}>{item.name}</Text>
            <Text style={styles.tableCell}>{item.field}</Text>
            <Text style={styles.tableCell}>{item.status}</Text>
          </View>
        )}
      />

      {/* Pagination Controls */}
      <View style={styles.paginationControls}>
        <TouchableOpacity onPress={handlePrevious} disabled={currentPage === 1}>
          <PrevIconSvg color={currentPage === 1 ? colors.grey : colors.black} />
        </TouchableOpacity>
        <Text style={styles.pageNumber}>{`Page ${currentPage} of ${Math.ceil(
          allData.length / itemsPerPage,
        )}`}</Text>
        <TouchableOpacity
          onPress={handleNext}
          disabled={currentPage === Math.ceil(allData.length / itemsPerPage)}>
          <NextIconSvg
            color={
              currentPage === Math.ceil(allData.length / itemsPerPage)
                ? colors.grey
                : colors.black
            }
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PrescreeningScreen;
