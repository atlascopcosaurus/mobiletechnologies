// screens/HomeScreen.js
import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { menuItems } from '../data/menuItems';
import Animated, { FadeIn } from 'react-native-reanimated';

export default function HomeScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <Animated.View entering={FadeIn.duration(500)}>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate('ItemDetail', { item })}
      >
        <Image source={{ uri: item.image }} style={styles.itemImage} />
        <View style={styles.itemInfo}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <Text style={styles.navText}>Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={menuItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  navBar: { flexDirection: 'row', justifyContent: 'space-between', padding: 10 },
  navText: { fontSize: 18, color: '#FF6347' },
  list: { padding: 10 },
  item: { flexDirection: 'row', marginBottom: 10, backgroundColor: '#F9F9F9', borderRadius: 10, padding: 10 },
  itemImage: { width: 100, height: 100, borderRadius: 10 },
  itemInfo: { marginLeft: 10, flex: 1 },
  itemName: { fontSize: 18, fontWeight: 'bold' },
  itemPrice: { fontSize: 16, color: '#FF6347' },
});