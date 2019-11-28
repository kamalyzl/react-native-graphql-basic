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

export const HomeScreen = () => {
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
        <Text>{error}</Text>
      </View>
    );
  }
  console.log(data);
  console.log(data.cities);
  return (
    <ScrollView style={styles.containerItem}>
      {data.cities &&
        data.cities.map(launch => (
          <View key={launch.name} style={styles.itemView}>
            <Text>{launch.name}</Text>
            <Text> > </Text>
          </View>
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
});
