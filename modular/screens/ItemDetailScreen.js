// screens/ItemDetailScreen.js
import React, { useContext } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';
import { CartContext } from '../context/CartContext';

export default function ItemDetailScreen({ route }) {
  const { item } = route.params;
  const { addToCart } = useContext(CartContext);

  return (
    <Animated.View entering={FadeIn.duration(500)} style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.price}>${item.price.toFixed(2)}</Text>
      <Button title="Add to Cart" onPress={() => addToCart(item)} color="#FF6347" />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', padding: 20, backgroundColor: '#FFF' },
  image: { width: '100%', height: 200, borderRadius: 10, marginBottom: 20 },
  name: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  description: { fontSize: 16, color: '#666', marginBottom: 10, textAlign: 'center' },
  price: { fontSize: 20, color: '#FF6347', marginBottom: 20 },
});