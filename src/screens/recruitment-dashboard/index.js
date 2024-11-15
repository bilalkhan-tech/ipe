import React from 'react';
import {
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import BackHeader from '../../components/atoms/headers/back-header';
import PrimaryButton from '../../components/carts/button';
import {colors} from '../../config/colors';
import styles from './styles';

const RecruitmentDashboard = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.primary} barStyle={'light-content'} />
      <BackHeader name="Sadruddin" date="Today   Jan 27" />

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.greetingText}>Hi Sadruddin co.</Text>
        <Text style={styles.subheadingText}>Initial Soft matching</Text>

        <TouchableOpacity style={styles.createContainer}>
          <PrimaryButton
            onclick={() => navigation.navigate('RecruiterProfile')}
            // onclick={() => navigation.navigate('JobPostScreen')}
            label="+ Create New"
            textStyle={styles.createButtonText}
            style={styles.createButton}
          />
        </TouchableOpacity>
        {[
          {
            title: 'Prescreening Candidates',
            navi: 'PrescreeningCandidates',
            value: 'Pre Screening',
          },
          {title: 'Acceptance/Rejection', navi: 'JobPostScreen'},
          {
            title: 'Onboard',
            navi: 'PrescreeningCandidates',
            value: 'Onboard',
          },
          {title: 'Total Jobs Posted', navi: 'TotalJobPost', value: 'History'},
        ].map((item, index) => (
          <View key={index} style={styles.listItem}>
            <Text style={styles.listText}>{item?.title}</Text>
            <TouchableOpacity
              style={styles.viewButton}
              onPress={() =>
                navigation.navigate(item?.navi, {value: item.value})
              }>
              <Text style={styles.viewButtonText}>View List</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default RecruitmentDashboard;
