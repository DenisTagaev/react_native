import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import { auth } from "../firebase";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../screens/Login";
import ContactList from "../screens/ContactList";
import Call from "../screens/Call";
import Sms from "../screens/Sms";

const Stack = createNativeStackNavigator();

function Navigator() {
  const handleSignOut = (navigation) => {
    //signOut from firebase
    auth
      .signOut()
      //go back to login screen
      .then(() => navigation.replace("Login"))
      .catch((error) => console.error(error));
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#395481",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontFamily: "monospace",
            fontWeight: "bold",
          },
          headerTitleAlign: "center",
        }}
        initialRouteName="Login"
        headerMode="screen"
      >
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: "Login",
          }}
        />
        <Stack.Screen
          name="ContactList"
          component={ContactList}
          options={(route) => ({
            title: "ContactList",
            headerRight: () => (
              <Icon.Button
                name="logout"
                style={{ backgroundColor: "#fff", paddingRight: 0 }}
                iconStyle={{ color: "#395481" }}
                onPress={() => {
                  alert("You will be logged out!");
                  handleSignOut(route.navigation);
                }}
              />
            ),
          })}
        />
        <Stack.Screen
          name="Call"
          component={Call}
          options={(route) => ({
            title: "Call",
            headerRight: () => (
              <Icon.Button
                name="logout"
                style={{ backgroundColor: "#fff", paddingRight: 0 }}
                iconStyle={{ color: "#395481" }}
                onPress={() => {
                  alert("You will be logged out!");
                  handleSignOut(route.navigation);
                }}
              />
            ),
          })}
        />
        <Stack.Screen
          name="Sms"
          component={Sms}
          options={(route) => ({
            title: "Sms",
            headerRight: () => (
              <Icon.Button
                name="logout"
                style={{ backgroundColor: "#fff", paddingRight: 0 }}
                iconStyle={{ color: "#395481" }}
                onPress={() => {
                  alert("You will be logged out!");
                  handleSignOut(route.navigation);
                }}
              />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
