import React from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';

const DATA = [
  {
    id: 1,
    image: require('../assets/ca_nau_lau.png'),
    name: 'Ca nấu lẫu, nấu mì mini',
    shop: 'Devang',
  },
  {
    id: 2,
    name: '1KG KHÔ GÀ BƠ TỎI...',
    shop: 'LTD Food',
    image: require('../assets/ga_bo_toi.png'),
  },
  {
    id: 3,
    name: 'Xe cần cẩu đa năng',
    shop: 'Thế giới đồ chơi',
    image: require('../assets/xa_can_cau.png'),
  },
  {
    id: 4,
    name: 'Đồ chơi mô hình',
    shop: 'Thế giới đồ chơi',
    image: require('../assets/do_choi_dang_mo_hinh.png'),
  },
  {
    id: 5,
    name: 'Lãnh đạo giản dơn',
    shop: 'Minh Long Book',
    image: require('../assets/lanh_dao_gian_don.png'),
  },
  {
    id: 6,
    name: 'Hiểu lòng con trẻ',
    shop: 'Minh Long Book',
    image: require('../assets/hieu_long_con_tre.png'),
  },
  {
    id: 7,
    name: 'Donal trump Thiên tài',
    shop: 'Devang',
    image: require('../assets/trump 1.png'),
  },
];

const ItemScreen4a = ({name, image, shop}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'space-around',
        height: 100,
      }}>
      <View style={{ justifyContent: 'center' }}>
        <Image
          source={image}
          style={{ height: 94, width: 94 }}
        />
      </View>
      <View style={{ justifyContent: 'space-around', padding: 5 }}>
        <Text style={{ fontSize: 16, fontWeight: '500' }}>
          {name}
        </Text>
        <Text style={{ fontSize: 16, fontWeight: '500', paddingBottom: 20 }}>
          Shop <Text style={{ color: 'red' }}>{shop}</Text>
        </Text>
      </View>
      <View style={{ justifyContent: 'center' }}>
        <TouchableOpacity
          style={{
            height: 50,
            width: 90,
            backgroundColor: 'red',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{ fontSize: 16, fontWeight: '500', color: 'white' }}>
            Chat
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

function screen4a() {
  return (
    <View style={{ flex: 1, backgroundColor: '#e0e0e0' }}>
      <View style={{ paddingHorizontal: 24 , justifyContent:'center', flex:1.4}}>
        <Text style={{ fontSize: 18, fontWeight: '500' }}>
          Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!
        </Text>
      </View>
      <View style={{flex:11}}>
        <FlatList
        data={DATA}
        renderItem={({item})=><ItemScreen4a image={item.image} shop={item.shop} name={item.name}/>}
        keyExtractor={(item)=> item.id}
        />
      </View>
    </View>
  );
}

export default screen4a;
