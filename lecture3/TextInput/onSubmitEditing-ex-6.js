import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image,TextInput,Button} from 'react-native';
const Hello = (props) => {
return (
<Text>Hello + {props.someText}</Text>
)
}
export default class App extends React.Component {
render(){
return (
<View style={styles.container}>
<Text>Welcome</Text>
<Hello someText='Mr John'/>
<Hello someText='Mr Sam'/>
</View>
);
}
}
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
alignItems: 'center',
justifyContent: 'center',
},
});