import React from "react";
import {Text, StyleSheet, View, TouchableOpacity, FlatList, Button} from "react-native";

export const BoxScreen = () => {

  return (
    <View style={styles.wrapper}>
      <Text
        style={styles.text}
      >
        Box Screen
      </Text>
      <View
        style={styles.childrenWrapper}
      >
        <View
          style={styles.childWrapper}
        >
          <Text
            style={styles.childText}
          >
            child 1
          </Text>
        </View>
        <View
          style={[styles.childWrapper, styles.centerBox]}
        >
          <Text
            style={styles.childText}
          >
            child 1
          </Text>
        </View>
        <View
          style={styles.childWrapper}
        >
          <Text
            style={styles.childText}
          >
            child 1
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.button}
      >
        <Text
          style={styles.buttonText}
        >
          Button
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 20,
  },
  text: {
    margin: 30,
    fontSize: 30,
    textAlign: 'center',
  },
  childrenWrapper: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    height: 100,
    justifyContent: 'center',
  },
  childWrapper: {
    backgroundColor: 'pink',
    width: 100,
    height: 50,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerBox: {
    alignSelf: 'flex-end',
    backgroundColor: 'green'
  },
  childText: {
    fontSize: 16,
    color: 'grey',
    fontWeight: '700',
  },
  button: {
    width: 200,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#068cb6',
    marginBottom: 30,
    alignSelf: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 16
  },
});
