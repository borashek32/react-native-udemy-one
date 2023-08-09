import React, {useReducer, useState} from "react";
import {Text, StyleSheet, View, Button} from "react-native";
import {ColorCounter} from "../components/ColorCounter";

const COLOR_INCREMENT = 20;

const reducer = (state, action) => {
  switch (action.type) {
    case 'change_red': {
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload }
    }
    case 'change_green': {
      return state.green + action.payload > 255 || state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload }
    }
    case 'change_blue': {
      return state.blue + action.payload > 255 || state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload }
    }
    default:{
      return state;
    }
  }
}

export const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 })
  const { red, green, blue } = state

  return (
    <View
      style={styles.wrapper}
    >
      <Text
        style={styles.text}
      >
        Square Screen
      </Text>
      <View style={{
        height: 150,
        width: 150,
        backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Text
          style={styles.boxText}
        >
          Color
        </Text>
      </View>
      <ColorCounter
        title={'red'}
        onIncrease={() => dispatch({ type: 'change_red', payload: COLOR_INCREMENT})}
        onDecrease={() => dispatch({ type: 'change_red', payload: -1 * COLOR_INCREMENT})}
      />
      <ColorCounter
        title={'green'}
        onIncrease={() => dispatch({ type: 'change_green', payload: COLOR_INCREMENT})}
        onDecrease={() => dispatch({ type: 'change_green', payload: -1 * COLOR_INCREMENT})}
      />
      <ColorCounter
        title={'blue'}
        onIncrease={() => dispatch({ type: 'change_blue', payload: COLOR_INCREMENT})}
        onDecrease={() => dispatch({ type: 'change_blue', payload: -1 * COLOR_INCREMENT})}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 5,
    alignItems: 'center',
  },
  text: {
    margin: 30,
    fontSize: 30,
  },
  boxText: {
    fontSize: 26,
    textTransform: 'uppercase',
    color: 'black',
    fontWeight: 'bold'
  }
});
