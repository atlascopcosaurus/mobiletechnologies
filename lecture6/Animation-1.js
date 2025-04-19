import { StyleSheet, Text, View, Animated, Pressable } from 'react-native'; 
import React, { useState } from 'react'; 
export default function App() { 
   
  const value = useState(new Animated.ValueXY({ x: 0, y: 0 }))[0]; 
 
  function moveBall() { 
    Animated.timing(value, { 
      toValue: { x: 100, y: 100 }, 
      duration: 1000, //1000 milliseconds(1 second) 
      useNativeDriver: false, 
    }).start(); 
  } 
 
  return ( 
    <View style={styles.container}> 
      <Animated.View style={value.getLayout()}> 
        <View style={styles.ball}></View> 
      </Animated.View> 
 
      <Pressable onPress={moveBall}> 
        <Text>Click here</Text> 
      </Pressable> 
    </View> 
  ); 
} 
 
const styles = StyleSheet.create({ 
  container: { 
    flex: 1, 
    backgroundColor: '#fff', 
    alignItems: 'center', 
    justifyContent: 'center', 
  }, 
  ball: { 
    width: 100, 
    height: 100, 
    borderRadius: 100 / 2, 
    backgroundColor: 'blue', 
  }, 
}); 