import React, {useState} from "react";
import {Text, StyleSheet, View, Button} from "react-native";
import {ColorCounter} from "../components/ColorCounter";

const COLOR_INCREMENT = 20;

export const SquareScreen = () => {
  const [red, setRed] = useState(0)
  const [green, setGreen] = useState(0)
  const [blue, setBlue] = useState(0)

  const back = () => {
    setRed(0)
    setGreen(0)
    setBlue(0)
  }

  const setColor = (color, change) => {
    switch (color) {
      case 'red':
        red + change > 255 || red + change < 0
          ? null
          : setRed(red + change);
        return;
      case 'green':
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);
        return;
      case 'blue':
        blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
        return;
      default:
        return;
    }
  };

  return (
    <View
      style={styles.wrapper}
    >
      <Text
        style={styles.text}
      >
        Square Screen
      </Text>
      <Button title={'Skip all changes'} onPress={back} />
      <View style={{
        height: 150,
        width: 150,
        backgroundColor: `rgb(${red}, ${green}, ${blue})`,
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
        onIncrease={() => setColor('red', COLOR_INCREMENT)}
        onDecrease={() => setColor('red', -1 * COLOR_INCREMENT)}
      />
      <ColorCounter
        title={'green'}
        onIncrease={() => setColor('green',  COLOR_INCREMENT)}
        onDecrease={() => setColor('green',  -1 * COLOR_INCREMENT)}
      />
      <ColorCounter
        title={'blue'}
        onIncrease={() => setColor('blue',  COLOR_INCREMENT)}
        onDecrease={() => setColor('blue', -1 *  COLOR_INCREMENT)}
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
