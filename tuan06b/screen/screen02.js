import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { FlatList, Image, TouchableOpacity } from 'react-native';
import { Text, View } from 'react-native';

function screen02() {
  const navigation = useNavigation();
  const DATA = [
    {
      id: 1,
      love: require('../assets/ant-design_heart-twotone.png'),
      image: require('../assets/bifour_-removebg-preview (1).png'),
      name: require('../assets/Pinarello.png'),
      price: require('../assets/price.png'),
      category: 'Roadbike',
    },
    {
      id: 2,
      love: require('../assets/heart.png'),
      image: require('../assets/bione-removebg-preview.png'),
      name: require('../assets/Pina Mountai.png'),
      price: require('../assets/price (1).png'),
      category: 'Mountain',
    },
    {
      id: 3,
      love: require('../assets/heart.png'),
      image: require('../assets/bithree_removebg-preview.png'),
      name: require('../assets/Pina Bike.png'),
      price: require('../assets/price (2).png'),
      category: 'Roadbike',
    },
    {
      id: 4,
      love: require('../assets/heart.png'),
      image: require('../assets/bitwo-removebg-preview.png'),
      name: require('../assets/Pinarello (1).png'),
      price: require('../assets/price (3).png'),
      category: 'Roadbike',
    },
    {
      id: 5,
      love: require('../assets/heart.png'),
      image: require('../assets/bithree_removebg-preview (1).png'),
      name: require('../assets/Pinarello (2).png'),
      price: require('../assets/price (4).png'),
      category: 'Roadbike',
    },
    {
      id: 6,
      love: require('../assets/heart.png'),
      image: require('../assets/bione-removebg-preview (1).png'),
      name: require('../assets/Pinarello (3).png'),
      price: require('../assets/price (5).png'),
      category: 'Roadbike',
    },
  ];

  const ItemScreen02 = ({ id, image, love, name, price }) => {
    const onPressItem = () => {
      navigation.navigate('screen03', { id, image, name, price });
    };
    return (
      <TouchableOpacity onPress={onPressItem}>
        <View
          style={{
            height: 200,
            width: 167,
            backgroundColor: '#F7BA8326',
            margin: 12,
            borderRadius: 10,
            alignContent: 'space-around',
          }}>
          <Image source={love} style={{ position: 'absolute', margin: 10 }} />
          <Image
            source={image}
            style={{ margin: 12, height: 127, width: 125 }}
          />
          <View style={{ alignItems: 'center' }}>
            <Image source={name} />
            <Image source={price} />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const [bike, setBike] = useState(DATA);

  function filterBike(category) {
    if(category==="All"){
      setBike(DATA)
    }
    else{
      setBike( DATA.filter(value=> value.category === category))
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: '#E94141',
            margin: 15,
          }}>
          The world’s Best Bike
        </Text>
      </View>
      <View style={{ flex: 9 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity
            style={{
              height: 28,
              width: 80,
              borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,
              borderColor: '#E9414187',
            }} onPress={()=>{filterBike("All")}}>
            <Text style={{ color: '#BEB6B6', fontWeight: 'bold' }}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 28,
              width: 80,
              borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,
              borderColor: '#E9414187',
            }} onPress={()=>{filterBike("Roadbike")}}>
            <Text style={{ color: '#BEB6B6', fontWeight: 'bold' }}>
              Roadbike
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 28,
              width: 80,
              borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,
              borderColor: '#E9414187',
            }} onPress={()=>{filterBike("Mountain")}}>
            <Text style={{ color: '#BEB6B6', fontWeight: 'bold' }}>
              Mountain
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={bike}
          renderItem={({ item }) => (
            <ItemScreen02
              id={item.id}
              image={item.image}
              love={item.love}
              price={item.price}
              name={item.name}
            />
          )}
          keyExtractor={(item) => item.id}
          numColumns={2}
        />
      </View>
    </View>
  );
}

export default screen02;
