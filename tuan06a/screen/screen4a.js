import React from 'react';
import { FlatList, ScrollView, Text, View } from 'react-native';
import ItemScreen4a from './itemscreen4a';

function screen4a() {
  const DATA = [
    {
      id: 1,
      name: 'Ca nấu lẫu, nấu mì mini',
      shop: 'Devang',
      image: require('../assets/ca_nau_lau.png'),
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

  return (
    <View style={{ flex: 1, backgroundColor: '#DCDCDC' }}>
      <View style={{ height: 60, justifyContent: 'center' }}>
        <Text style={{ padding: 30, fontWeight: '500' }}>
          Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!
        </Text>
      </View>
      <View style={{}}>
        <ScrollView style={{ maxHeight: 600 }}>
          <FlatList
            data={DATA}
            renderItem={({ item }) => (
              <ItemScreen4a
                image={item.image}
                name={item.name}
                shop={item.shop}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        </ScrollView>
      </View>
    </View>
  );
}

export default screen4a;
