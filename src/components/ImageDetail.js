import React from "react";
import {Image, StyleSheet, Text, View} from "react-native";

export const ImageDetail = ({ name, desc, imgPath }) => {

  return (
    <View style={styles.wrapper}>
      <Text
        style={styles.text}
      >
        Image Detail
      </Text>
      <Image
        style={styles.image}
        source={imgPath}
      />
      <Text
      >
        {name}
      </Text>
      <Text
      >
        {desc}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    width: 300,
    padding: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'black',
    justifyContent: 'center',
    marginBottom: 30,
  },
  image: {
    width: 200,
    height: 150,
  },
  text: {
    textAlign: 'center',
    margin: 30,
    fontSize: 30,
  },
});
