import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

export default class DetailsSreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam('name'),
    };
  };
  render() {
    const {goBack} = this.props.navigation;
    const jobs = this.props.navigation.getParam('jobs');
    console.log('jobs - kamaly');
    console.log(jobs);
    return (
      <ScrollView style={styles.containerItem}>
        {jobs &&
          jobs.map(launch => (
            <TouchableOpacity
              key={launch.name}
              style={styles.itemView}
              onPress={() => {
                console.log('click');
              }}>
              <View style={styles.groupText}>
                <Text>{launch.title}</Text>
                <Text style={styles.dateText}>{launch.createdAt}</Text>
              </View>
            </TouchableOpacity>
          ))}
      </ScrollView>
    );
  }
}

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
