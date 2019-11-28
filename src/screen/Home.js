import React from 'react';
import {FETCH_QUERY_OTHER} from '../querys';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useQuery} from '@apollo/react-hooks';

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
          <TouchableOpacity
            key={launch.name}
            style={styles.itemView}
            onPress={() => {
              console.log('click');
              navigate('Details', {name: launch.name, jobs: launch.jobs});
            }}>
            <View style={styles.groupText}>
              <Text>{launch.name}</Text>
              <Text style={styles.dateText}>{launch.createdAt}</Text>
            </View>
            <Text> > </Text>
          </TouchableOpacity>
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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  containerItem: {
    width: '80%',
    marginHorizontal: 40,
    marginVertical: 20,
  },
  itemView: {
    marginVertical: 10,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderBottomWidth: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  groupText: {
    flexDirection: 'column',
    marginBottom: 5,
  },
  dateText: {
    color: '#828282',
    fontSize: 8,
  },
  error: {
    color: '#EC5757',
    fontWeight: 'bold',
  },
});
