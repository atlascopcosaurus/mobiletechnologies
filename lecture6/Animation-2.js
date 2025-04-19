import { StyleSheet, Text, View, Animated, Pressable } from 'react-native'; 
import React, { useState } from 'react'; 
export default function App() { 
  const leftValue = useState(new Animated.Value(0))[0]; 
 
  function moveBall() { 
    Animated.timing(leftValue, { 
      toValue: 100, 
      duration: 1000, //1000 milliseconds(1 second) 
      useNativeDriver: false, 
    }).start(); 
  } 
 
  return ( 
    <View style={styles.container}> 
      <Animated.View 
        style={{ 
          width: 100, 
          height: 100, 
          borderRadius: 100 / 2, 
          backgroundColor: 'blue', 
          marginLeft: leftValue, 
        }} 
      /> 
 
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
}); 