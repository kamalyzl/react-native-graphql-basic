import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export const List = ({key, onPress, title, subTitle, some}) => {
  return (
    <TouchableOpacity key={key} style={styles.itemView} onPress={onPress}>
      <View style={styles.groupText}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
      <Text style={styles.some}> {some} </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
  subTitle: {
    color: '#828282',
    fontSize: 10,
  },
  title: {
    fontSize: 12,
  },
  some: {
    fontSize: 10,
    color: '#828282',
  },
});
