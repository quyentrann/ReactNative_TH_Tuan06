import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

function ItemScreen4a({ image, name, shop }) {
  return (
    <View
      style={{
        height: 90,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        marginVertical: 2,
      }}>
      <View style={{ flexDirection: 'row', paddingLeft: 5 }}>
        <Image source={image} style={{justifyContent:'center'}}/>
        <View
          style={{
            marginHorizontal: 10,
            justifyContent: 'space-around',
            paddingVertical: 10,
          }}>
          <Text style={{ fontWeight: '500' }}>{name}</Text>
          <Text style={{ color: 'red', fontWeight: '500' }}>{shop}</Text>
        </View>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'flex-end',
          marginHorizontal: 10,
        }}>
        <TouchableOpacity
          style={{
            height: 40,
            width: 80,
            backgroundColor: 'red',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{ color: 'white' }}>Chat</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ItemScreen4a;
