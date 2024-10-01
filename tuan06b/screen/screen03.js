import { useRoute } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Image, Text, View } from 'react-native';

function screen03() {
  const route = useRoute();
  console.log(route.params);

  const { id, image, name, price } = route.params;
  console.log(id);
  
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 1.5,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#E941411A',
          margin: 10,
          borderRadius: 12,
        }}>
        <Image source={image} style={{ height: 200, width: 217 }} />
      </View>
      <View style={{ flex: 1.2, margin: 10, justifyContent: 'space-around' }}>
        <Image source={name} style={{ marginLeft: 5, color: 'black' }} />
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontSize: 22, fontWeight: '500', color: 'gray' }}>
            15% OFF I 350$
          </Text>
          <Image
            source={price}
            style={{ marginLeft: 5, color: 'black', marginLeft: 40 }}
          />
        </View>
        <Text style={{ fontSize: 22, fontWeight: '500' }}>Description</Text>
        <Text style={{ fontSize: 20, fontWeight: '500', color: 'gray' }}>
          It is a very important form of writing as we write almost everything
          in paragraphs, be it an answer, essay, story, emails, etc.
        </Text>
      </View>
      <View
        style={{
          flex: 0.4,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <TouchableOpacity>
          <Image
            source={require('../assets/heart.png')}
            style={{ height: 35, width: 35 }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 55,
            width: 310,
            backgroundColor: '#E94141',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 32,
          }}>
          <Text style={{ fontSize: 24, fontWeight: '500', color: 'white' }}>
            Add to card
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default screen03;
