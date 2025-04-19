import { StyleSheet, Text, View } from 'react-native'; 
import React from 'react'; 
 
export default class App extends React.Component { 
  state = { 
    data: { Fact: 'Loading...' }, //Json data we receive from the request 
  }; 
 
  getJsonData = () => { 
    fetch('https://catfact.ninja/fact', { method: 'GET' }) 
      .then((response) => response.json()) 
      .then((responseJson) => { 
        console.log(responseJson); 
        this.setState({ data: responseJson }); 
      }) 
      .catch((error) => { 
        console.error(error); 
      }); 
  }; 
 //componentDidMount is used to initiate the fetching of JSON data from an API  (getJsonData function) as soon as the App component is mounted. 
  componentDidMount = () => { 
    this.getJsonData(); 
  }; 
 
  render() { 
    return ( 
      <View style={styles.container}> 
        <Text>Fact : {this.state.data['fact']}</Text> 
        <Text>Length : {this.state.data['length']}</Text> 
      </View> 
    ); 
  } 
} 
 
const styles = StyleSheet.create({ 
  container: { 
    margin: 20, 
    flex: 1, 
    backgroundColor: '#fff', 
    alignItems: 'flex-start', 
    justifyContent: 'center', 
  }, 
}); 
