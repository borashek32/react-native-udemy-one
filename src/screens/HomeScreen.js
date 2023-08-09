import React from "react";
import {Text, StyleSheet, View, TouchableOpacity} from "react-native";

const HomeScreen = ({ navigation }) => {

  return (
    <View
      style={styles.wrapper}
    >
      <Text
        style={styles.text}
      >
        Hi there
      </Text>
      {/*<Button*/}
      {/*  onPress={() => props.navigation.navigate('Components')}*/}
      {/*  title={'Go to components demo'}*/}
      {/*></Button>*/}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Box')}
      >
        <Text
          style={styles.buttonText}
        >
          Go to Box
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Components')}
      >
        <Text
          style={styles.buttonText}
        >
          Go to Components
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('List')}
      >
        <Text
          style={styles.buttonText}
        >
          Go to List
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Image')}
      >
        <Text
          style={styles.buttonText}
        >
          Go to Image
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Counter')}
      >
        <Text
          style={styles.buttonText}
        >
          Go to Counter
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Color')}
      >
        <Text
          style={styles.buttonText}
        >
          Go to Color Picker
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Square')}
      >
        <Text
          style={styles.buttonText}
        >
          Go to Square
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Text')}
      >
        <Text
          style={styles.buttonText}
        >
          Go to Text
        </Text>
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  wrapper: {
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

export default HomeScreen;
