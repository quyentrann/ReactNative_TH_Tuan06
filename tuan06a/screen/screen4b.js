import React from 'react';
import { FlatList, Image, Text, View } from 'react-native';

const DATA = [
  {
    id: 1,
    name: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: '62.9000 đ',
    image: require('../assets/giacchuyen 1.png'),
  },
  {
    id: 2,
    name: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: '49.9000 đ',
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
    price: '9.9000 đ',
    image: require('../assets/dauchuyendoi 1.png'),
  },
  {
    id: 5,
    name: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: '63.9000 đ',
    image: require('../assets/carbusbtops2 1.png'),
  },
  {
    id: 6,
    name: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: '55.9000 đ',
    image: require('../assets/daucam 1.png'),
  },
];

const ImtemScreen4b = ({image, name, price}) => {
  return (
    <View style={{ borderWidth: 1, height: 200, width: 170, margin: 15 }}>
      <Image source={image} />
      <View style={{ padding: 10, justifyContent: 'space-around' }}>
        <Text style={{ fontSize: 14, fontWeight: '500' }}>
          {name}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 5,
            justifyContent: 'space-around',
            width: 90,
            paddingTop: 5,
          }}>
          <Image source={require('../assets/Star 1.png')} />
          <Image source={require('../assets/Star 1.png')} />
          <Image source={require('../assets/Star 1.png')} />
          <Image source={require('../assets/Star 1.png')} />
          <Image source={require('../assets/Star 1.png')} />
          <Text>(15)</Text>
        </View>
        <View style={{ flexDirection: 'row', marginHorizontal: 2 }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{price}</Text>
          <Text style={{ color: 'gray', paddingHorizontal: 20 }}>-39%</Text>
        </View>
      </View>
    </View>
  );
};

function screen4b() {
  return <View style={{ flex: 1 , alignItems:'center'}}>
    <FlatList
    data={DATA}
    renderItem={({item})=> <ImtemScreen4b name={item.name} price={item.price} image={item.image}/>}
    keyExtractor={(item)=>item.id}
    numColumns={2}
    />
  </View>;
}

export default screen4b;
