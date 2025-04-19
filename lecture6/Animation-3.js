import { StyleSheet, Text, View, Animated, Pressable } from 'react-native'; 
import React, { useState } from 'react'; 
export default function App() { 
  const opacity = useState(new Animated.Value(0))[0]; 
 
  function fadeInBall() { 
    Animated.timing(opacity, { 
      toValue: 1, 
      duration: 1000, //1000 milliseconds(1 second) 
      useNativeDriver: false, 
    }).start(); 
  } 
 
  function fadeOutBall() { 
    Animated.timing(opacity, { 
      toValue: 0, 
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
          opacity, 
          borderRadius: 100 / 2, 
          backgroundColor: 'blue', 
        }} 
      /> 
 
      <Pressable onPress={fadeInBall}> 
        <Text>Fade In Ball</Text> 
      </Pressable> 
      <Pressable onPress={fadeOutBall}> 
        <Text>Fade Out Ball</Text> 
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