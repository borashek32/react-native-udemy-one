import React, {useState} from "react";
import {Text, StyleSheet, View, TouchableOpacity, FlatList, TextInput} from "react-native";

export const TextScreen = () => {
  const [name, setName] = useState('')

  return (
    <View
      style={styles.wrapper}
    >
      <Text
        style={styles.text}
      >
        Text Screen
      </Text>
      <TextInput
        autoCapitalize={'none'}
        autoCorrect={false}
        style={styles.input}
        value={name}
        onChangeText={(newValue) => setName(newValue)}
      />
      {name.length < 5 && name.length !== 0 && <Text
        style={styles.error}
      >
        Length of name is too short
      </Text>}
      {name.length > 10 && <Text
        style={styles.error}
      >
        Length of name is too long
      </Text>}
      {name.length > 5 && name.length < 10 && <Text
        style={styles.text}
      >
        My name is {name}
      </Text>}
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
  input: {
    width: 300,
    padding: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'grey',
    justifyContent: 'center',
    borderRadius: 4,
  },
  error: {
    color: 'red',
    fontSize: 20,
    margin: 10
  },
});
