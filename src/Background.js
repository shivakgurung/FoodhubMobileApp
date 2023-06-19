import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import React from 'react';

const Background = ({children}) => {
  return (
    <View>
      <ImageBackground
        source={require('./assets/foodBackground1.jpg')}
        style={{height: '100%'}}>
        <View style={styles.overlay} />
        <View style={{position: 'absolute'}}>{children}</View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the overlay color and opacity here
  },
});
export default Background;
