import {StyleSheet, Text, View, StatusBar, Image} from 'react-native';
import React from 'react';
import {Display} from '../utils';
import {Colors, Fonts, Images} from '../constants';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={Colors.DEFAULT_GREEN}
        translucent
      />
      <Image source={Images.PLATE} resizeMode="contain" style={styles.image} />
      <Text style={styles.titleText}>Foodhub</Text>
    </View>
    // <View>
    //   <Text>Check splash</Text>
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.DEFAULT_GREEN,
  },
  image: {
    height: Display.setHeight(30),
    width: Display.setWidth(60),
  },
  titleText: {
    color: Colors.DEFAULT_WHITE,
    fontSize: 32,
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
  },
});

export default SplashScreen;
