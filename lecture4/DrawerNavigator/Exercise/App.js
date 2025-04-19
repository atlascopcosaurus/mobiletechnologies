import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./foodScreens/HomeScreen";
import ItemScreen from "./foodScreens/ItemScreen";
import MyCart from "./foodScreens/MyCart";
import MyProfile from "./foodScreens/MyProfile";
const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="HomeScreen">
        <Drawer.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: "Home",
            drawerLabel: "Home",
            drawerActiveTintColor: "white",
            drawerActiveBackgroundColor: "orange",
          }}
        />
        <Drawer.Screen
          name="ItemScreen"
          component={ItemScreen}
          options={{
            title: "Items",
            drawerLabel: "Items",
            drawerActiveTintColor: "white",
            drawerActiveBackgroundColor: "orange",
          }}
        />
        <Drawer.Screen
          name="MyCart"
          component={MyCart}
          options={{
            title: "My Cart",
            drawerLabel: "My Cart",
            drawerActiveTintColor: "white",
            drawerActiveBackgroundColor: "orange",
          }}
        />
        <Drawer.Screen
          name="MyProfile"
          component={MyProfile}
          options={{
            title: "My Profile",
            drawerLabel: "My Profile",
            drawerActiveTintColor: "white",
            drawerActiveBackgroundColor: "orange",
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
