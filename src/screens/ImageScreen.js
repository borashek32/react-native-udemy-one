import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {ImageDetail} from "../components/ImageDetail";
import img1 from '../../assets/images/forest.jpg';
import img2 from '../../assets/images/beach.jpg';
import img3 from '../../assets/images/mountain.jpg';

export const ImageScreen = () => {
  const imageDetails = [
    { name: 'Forest', imgPath: img1, desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam blanditiis, iste magnam modi possimus provident rem reprehenderit sed. Adipisci aliquid enim inventore iusto? Aliquid asperiores consequatur expedita natus nulla sint?' },
    { name: 'Beach', imgPath: img2, desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam blanditiis, iste magnam modi possimus provident rem reprehenderit sed. Adipisci aliquid enim inventore iusto? Aliquid asperiores consequatur expedita natus nulla sint?' },
    { name: 'Mountain', imgPath: img3, desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam blanditiis, iste magnam modi possimus provident rem reprehenderit sed. Adipisci aliquid enim inventore iusto? Aliquid asperiores consequatur expedita natus nulla sint?' },
  ];

  return (
    <View
      style={styles.wrapper}
    >
      <Text
        style={styles.text}
      >
        Hello Image Screen
      </Text>
      {imageDetails.map(imageDetail => {
        return <View
          key={imageDetail.name}
        >
          <ImageDetail
            name={imageDetail.name}
            desc={imageDetail.desc}
            imgPath={imageDetail.imgPath}
          />
        </View>
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    margin: 30,
    fontSize: 30,
  },
});
