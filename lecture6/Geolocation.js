import React, { useState } from 'react'; 
import { View, Text, Button } from 'react-native'; 
import * as Location from 'expo-location'; // Importing the Location module from expo 
 
const GeolocationExample = () => { 
  // State to store the user's current location 
  const [location, setLocation] = useState(null); 
  // State to store the user's address 
  const [address, setAddress] = useState(null); 
  // State to store any error that might occur during geolocation 
  const [errorMsg, setErrorMsg] = useState(null); 
 
  // Function to request permission and get the user's current location 
  const getLocation = async () => { 
    try { 
      // Request permission to access the device's location 
      let { status } = await Location.requestForegroundPermissionsAsync(); 
      if (status !== 'granted') { // If permission is not granted 
        setErrorMsg('Permission to access location was denied'); 
        return; 
      } 
 
      // Get the user's current location 
      let location = await Location.getCurrentPositionAsync({}); 
      setLocation(location); // Store the location in the state 
 
      // Fetch address based on latitude and longitude 
      let addressResponse = await Location.reverseGeocodeAsync({ 
        latitude: location.coords.latitude, 
        longitude: location.coords.longitude, 
      }); 
      // Construct address string from response 
      let formattedAddress = `${addressResponse[0].name}, 
${addressResponse[0].city}, ${addressResponse[0].region}, 
${addressResponse[0].country}`; 
      setAddress(formattedAddress); // Store the address in the state 
    } catch (error) { 
      setErrorMsg(error.message); // If any error occurs during geolocation, store the error message in the state 
} 
}; 
return ( 
<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}> 
{/* Display the user's current location if available */} 
{location && ( 
<View> 
<Text>Latitude: {location.coords.latitude}</Text> 
<Text>Longitude: {location.coords.longitude}</Text> 
<Text>Address: {address}</Text> 
</View> 
)} 
{/* Display any error message that might occur */} 
{errorMsg && <Text>Error: {errorMsg}</Text>} 
{/* Button to manually fetch the user's location */} 
<Button title="GET LOCATION" onPress={getLocation} /> 
</View> 
); 
}; 
export default GeolocationExample;