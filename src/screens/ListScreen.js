import React from "react";
import {Text, StyleSheet, View, FlatList} from "react-native";

export const ListScreen = () => {
  // const friends = [
  //   { key: '1', name: 'friend1' },
  //   { key: '2', name: 'friend2' },
  //   { key: '3', name: 'friend3' },
  //   { key: '4', name: 'friend4' },
  // ]

  const friends = [
    { name: 'friend1', age: 41 },
    { name: 'friend2', age: 42 },
    { name: 'friend3', age: 43 },
    { name: 'friend4', age: 43 },
    { name: 'friend5', age: 45 },
    { name: 'friend6', age: 41 },
    { name: 'friend7', age: 47 },
    { name: 'friend8', age: 46 },
    { name: 'friend9', age: 46 },
    { name: 'friend10', age: 48 },
    { name: 'friend11', age: 47 },
    { name: 'friend12', age: 32 },
    { name: 'friend13', age: 23 },
    { name: 'friend14', age: 90 },
    { name: 'friend15', age: 40 },
    { name: 'friend16', age: 45 },
  ]

  return (
    <View>
      <Text
        style={styles.textStyles}
      >
        This is a list screen
      </Text>
      <View
        style={styles.listStyles}
      >
        <FlatList
          keyExtractor={friend => friend.name}
          data={friends}
          renderItem={({ item }) => {
            return <View style={styles.nameWrapper}>
              <Text
                style={styles.nameStyles}
                key={item.index}
              >
                Name - {item.name}, Age {item.age}
              </Text>
            </View>
          }} />
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  listStyles: {
    justifyContent: 'center',
  },
  textStyles: {
    color: 'red',
    fontSize: 30,
  },
  nameWrapper: {
    width: 300,
    padding: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'black',
    justifyContent: 'center',
  },
  nameStyles: {
    color: 'green',
    fontSize: 20,
  },
});
