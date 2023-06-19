import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Background from './Background';
import Btn from './Btn';
import {darkGreen, green} from './consts';

export default function HomeScreen(props) {
  return (
    <Background>
      <View style={{marginHorizontal: 40, marginVertical: 100}}>
        <Text style={{color: '#FFFFFF', fontSize: 64}}>Foodhub</Text>
        <Text style={{color: '#FFFFFF', fontSize: 50, marginBottom: 40}}>
          Your Flavors, Our Delivery
        </Text>
        <Btn
          bgColor={green}
          textColor="white"
          btnLabel="Login"
          Press={() => props.navigation.navigate('Login')}
        />
        <Btn
          bgColor="white"
          textColor={darkGreen}
          btnLabel="Signup"
          Press={() => props.navigation.navigate('Signup')}
        />
      </View>
    </Background>
  );
}
const styles = StyleSheet.create({});
