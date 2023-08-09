import React from "react";
import {Text, StyleSheet, View} from "react-native";

export const ComponentsScreen = () => {
  const name = 'nataly';

  return (
    <View>
      <Text style={styles.textStyles}>This is a components screen</Text>
      <Text style={styles.nameStyles}>my name is {name}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  textStyles: {
    color: 'red',
    fontSize: 30,
  },
  nameStyles: {
    color: 'green',
    fontSize: 20
  },
});
