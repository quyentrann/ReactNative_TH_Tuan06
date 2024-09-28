import React from 'react';
import { FlatList, Image, Text, View } from 'react-native';

function screen4b() {
  const DATA = [
    {
      id: 1,
      name: 'Cáp chuyển từ Cổng USB sang PS2...',
      price: '69.9000 đ',
      image: require('../assets/giacchuyen 1.png'),
    },
    {
      id: 2,
      name: 'Cáp chuyển từ Cổng USB sang PS2...',
      price: '69.9000 đ',
      image: require('../assets/daynguon 1.png'),
    },
    {
      id: 3,
      name: 'Cáp chuyển từ Cổng USB sang PS2...',
      price: '69.9000 đ',
      image: require('../assets/dauchuyendoipsps2 1.png'),
    },
    {
      id: 4,
      name: 'Cáp chuyển từ Cổng USB sang PS2...',
      price: '69.9000 đ',
      image: require('../assets/dauchuyendoi 1.png'),
    },
    {
      id: 5,
      name: 'Cáp chuyển từ Cổng USB sang PS2...',
      price: '69.9000 đ',
      image: require('../assets/carbusbtops2 1.png'),
    },
    {
      id: 6,
      name: 'Cáp chuyển từ Cổng USB sang PS2...',
      price: '69.9000 đ',
      image: require('../assets/daucam 1.png'),
    },
  ];

  const ItemScreen4b = ({ name, image, price }) => {
    return (
      <View
        style={{
          height: 220,
          width: 175,
          borderWidth: 1,
          marginTop: 20,
          marginHorizontal: 10,
          alignItems:'center'
        }}>
        <Image
          source={image}
          style={{ height: 105, width: 165, marginHorizontal: 5 }}
        />
        <View style={{ padding: 15 }}>
          <Text style={{ fontSize: 15, fontWeight: '500' }}>{name}</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              width: 125,
              paddingVertical: 5,
              alignItems: 'center',
            }}>
            <Image source={require('../assets/Star 1.png')} />
            <Image source={require('../assets/Star 1.png')} />
            <Image source={require('../assets/Star 1.png')} />
            <Image source={require('../assets/Star 1.png')} />
            <Image source={require('../assets/Star 1.png')} />
            <Text>(15)</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{price}</Text>
            <Text style={{ color: '#969DAA', paddingLeft: 20 }}>-39%</Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <ItemScreen4b
            image={item.image}
            name={item.name}
            price={item.price}
          />
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
}

export default screen4b;
