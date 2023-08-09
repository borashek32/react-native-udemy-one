import React from "react";
import {Text, StyleSheet, View, TouchableOpacity} from "react-native";

export const ColorCounter = ({ title, onIncrease, onDecrease }) => {

  return (
    <View
      style={styles.wrapper}
    >
      <Text
        style={{
          color: `${title}`,
          marginBottom: 5,
          fontSize: 20,
        }}
      >
        {title}
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => onIncrease()}
      >
        <Text
          style={styles.buttonText}
        >
          Increase {title}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => onDecrease()}
      >
        <Text
          style={styles.buttonText}
        >
          Decrease {title}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 20,
    alignItems: 'center',
  },
  button: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#068cb6',
    marginBottom: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16
  },
});
