// screens/CartScreen.js
import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { CartContext } from '../context/CartContext';
import Animated, { FadeIn } from 'react-native-reanimated';

export default function CartScreen() {
  const { cart, updateQuantity, removeFromCart } = useContext(CartContext);

  const renderItem = ({ item }) => (
    <Animated.View entering={FadeIn.duration(500)} style={styles.item}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemPrice}>${(item.price * item.quantity).toFixed(2)}</Text>
      <View style={styles.quantityContainer}>
        <TouchableOpacity onPress={() => updateQuantity(item.id, item.quantity - 1)}>
          <Text style={styles.quantityButton}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantity}>{item.quantity}</Text>
        <TouchableOpacity onPress={() => updateQuantity(item.id, item.quantity + 1)}>
          <Text style={styles.quantityButton}>+</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => removeFromCart(item.id)}>
        <Text style={styles.removeButton}>Remove</Text>
      </TouchableOpacity>
    </Animated.View>
  );

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.list}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: ${total.toFixed(2)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  list: { padding: 10 },
  item: { padding: 10, backgroundColor: '#F9F9F9', borderRadius: 10, marginBottom: 10 },
  itemName: { fontSize: 18, fontWeight: 'bold' },
  itemPrice: { fontSize: 16, color: '#FF6347' },
  quantityContainer: { flexDirection: 'row', alignItems: 'center', marginVertical: 10 },
  quantityButton: { fontSize: 20, paddingHorizontal: 10, color: '#FF6347' },
  quantity: { fontSize: 16, marginHorizontal: 10 },
  removeButton: { color: '#FF0000', fontSize: 16 },
  totalContainer: { padding: 20, borderTopWidth: 1, borderColor: '#ccc' },
  totalText: { fontSize: 20, fontWeight: 'bold', textAlign: 'center' },
});