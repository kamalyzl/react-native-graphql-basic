import React from 'react';
import {FETCH_QUERY_OTHER} from '../querys';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import {useQuery} from '@apollo/react-hooks';
import {List} from '../components/List';

export const HomeScreen = ({navigation: {navigate}}) => {
  const {data, loading, error} = useQuery(FETCH_QUERY_OTHER);
  if (loading) {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="small" color="#00ff00" />
      </View>
    );
  }
  if (error) {
    return (
      <View>
        <Text style={styles.error}>{error}</Text>
      </View>
    );
  }
  return (
    <ScrollView style={styles.containerItem}>
      {data.cities &&
        data.cities.map(launch => (
          <List
            key={launch.name}
            onPress={() => {
              navigate('Details', {name: launch.name, jobs: launch.jobs});
            }}
            title={launch.name}
            subTitle={launch.createdAt}
            some={'>'}
          />
        ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
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
