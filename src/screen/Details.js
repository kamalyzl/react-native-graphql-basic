import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {HeaderBackButton} from 'react-navigation';
import {List} from '../components/List';

export default class DetailsSreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam('name'),
      // headerLeft: <HeaderBackButton onPress={() => navigation.goBack()} />,
    };
  };
  render() {
    const jobs = this.props.navigation.getParam('jobs');

    return (
      <ScrollView style={styles.containerItem}>
        {jobs &&
          jobs.map(launch => {
            return (
              <List
                key={launch.name}
                title={launch.title}
                some={launch.company.name}
              />
            );
          })}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  containerItem: {
    width: '80%',
    marginHorizontal: 40,
    marginVertical: 20,
  },
  error: {
    color: '#EC5757',
    fontWeight: 'bold',
  },
});
