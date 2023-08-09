import React, {useReducer, useState} from "react";
import {Text, StyleSheet, View, TouchableOpacity} from "react-native";

const reducer = (state, action) => {
  switch (action.type) {
    case 'increase': {
      return { ...state, count: state.count + action.payload};
    }
    case 'decrease': {
      return { ...state, count: state.count - action.payload};
    }
    default: {
      return state;
    }
  }
}

export const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 })

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => dispatch({ type: 'increase', payload: 1 })}
      >
        <Text
          style={styles.buttonText}
        >
          Increase
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => dispatch({ type: 'decrease', payload: 1})}
      >
        <Text
          style={styles.buttonText}
        >
          Decrease
        </Text>
      </TouchableOpacity>
      <Text
        style={styles.text}
      >
        Current count: {state.count}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 20,
    alignItems: 'center',
  },
  text: {
    margin: 30,
    fontSize: 30,
  },
  button: {
    width: 200,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#068cb6',
    marginBottom: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 16
  },
});
