import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Acctscreens from "../screens/Acctscreen";
import Advscreen from "../screens/Advscreen";
import Homescreen from "../screens/Homescreen";
import Loginscreens from "../screens/Loginscreen";
import Productscreen from "../screens/Productscreen";
import Profilescreen from "../screens/Profilescreen";

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

const TAB_ICON = {
  Home: "home-sharp",
  Account: "settings",
  Chat: "chatbox-ellipses",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    tabBarStyle: { backgroundColor: "black" },
  };
};

const Control = () => {
  return (
    <Tab.Navigator
      screenOptions={createScreenOptions}
      tabBarOptions={{
        activeTintColor: "#F56B1D",
        inactiveTintColor: "white",
      }}
      initialRouteName="Homepage"
    >
      <Tab.Screen
        name="Home"
        component={Homescreen}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: "black",
          },
          headerTitleStyle: {
            color: "white",
          },
        }}
      />

      <Tab.Screen
        name="Acct"
        component={Acctscreens}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: "black",
          },
          headerTitleStyle: {
            color: "white",
          },
        }}
      />
    </Tab.Navigator>
  );
};

const Acctnav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Login"
        component={Loginscreens}
      />

      <Stack.Screen
        name="Main"
        component={Control}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
export default Acctnav;
