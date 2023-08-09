import React, {useState} from "react";
import {Text, StyleSheet, View, TouchableOpacity, FlatList} from "react-native";

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`
}

export const ColorScreen = () => {
  const [colors, setColors] = useState([])

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setColors([...colors, randomRgb()])
        }}
      >
        <Text
          style={styles.buttonText}
        >
          Generate a color
        </Text>
      </TouchableOpacity>

      <FlatList
         data={colors}
         keyExtractor={item => item}
         renderItem={({item}) => {
           return <View
             style={{
               alignItems: 'center',
               justifyContent: 'center',
               width: 100,
               height: 100,
               backgroundColor: item
             }}
           >
             <Text
               style={{color: 'pink'}}
             >
               new color
             </Text>
           </View>
         }}
      />
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
