import {View, Text, StyleSheet, StatusBar} from 'react-native';
import React from 'react';
import Background from './Background';
import Btn from './Btn';
import {Colors} from './constants';
import {darkGreen, green} from './consts';
// import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/AntDesign';

export default function Home(props) {
  return (
    <Background>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.DEFAULT_WHITE}
      />
      <View style={{marginHorizontal: 40, marginVertical: 100}}>
        <Text style={{color: '#FFFFFF', fontSize: 64}}>Foodhub</Text>
        <Text style={{color: '#FFFFFF', fontSize: 50, marginBottom: 40}}>
          Your Flavors, Our Delivery
        </Text>
        {/* <Icon name="user" size={22} color="black" /> */}
        <Btn
          bgColor={green}
          textColor="white"
          btnLabel="Login"
          Press={() => props.navigation.navigate('SigninScreen')}
        />
        <Btn
          bgColor="white"
          textColor={darkGreen}
          btnLabel="Signup"
          Press={() => props.navigation.navigate('SignupScreen')}
        />
      </View>
    </Background>
  );
}
const styles = StyleSheet.create({});
