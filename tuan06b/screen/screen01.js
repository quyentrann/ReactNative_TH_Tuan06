import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Image, Text, View } from 'react-native';

function screen01() {
  return (
    <View style={{ flex: 1, backgroundColor: '#F9F7F6' }}>
      <View
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image source={require('../assets/fonttitle.png')} />
      </View>
      <View
        style={{
          flex: 4,
          backgroundColor: '#E941411A',
          margin: 10,
          borderRadius: 50,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image source={require('../assets/bifour_-removebg-preview.png')} />
      </View>
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Text style={{ fontSize: 26, fontWeight: 'bold', textAlign: 'center' }}>
          POWER BIKE{'\n'} SHOP
        </Text>
      </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity
          style={{
            height: 60,
            width: 340,
            backgroundColor: '#E94141',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius:40
          }}>
          <Image source={require('../assets/Get Started.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default screen01;
