import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Acctscreens from "../screens/Acctscreen";

import Homescreens from "../screens/Homescreen";
import Loginscreens from "../screens/Loginscreen";
import Productscreen from "../screens/Productscreen";
import Profilescreen from "../screens/Profilescreen";
import RegisterScreen from "../screens/Registerscreen";
import ResetPassword from "../screens/ResetPasswordScreen";
import Welcomescreens from "../screens/Welcome";

import Descriptionscreen from "../screens/Descriptionscreen";
import Grammarscreen from "../screens/Grammarscreen";
import Languagescreen from "../screens/Languagescreen";
import Namescreen from "../screens/Namescreen";
import Notesscreen from "../screens/Notesscreen";
import Summarizescreen from "../screens/Summarizescreen";
import Generalscreen from "../screens/Generalscreen";
import Recordscreen from "../screens/Recordscreen";
import Imagescreens from "../screens/Imagescreen";
import Settingsscreen from "../screens/Settingsscreen";
import Songscreen from "../screens/Songscreen";

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

const TAB_ICON = {
  Home: "home",
  Profile: "account-circle",
  Settings: "settings",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <MaterialIcons name={iconName} size={size} color={color} />
    ),
    tabBarStyle: { backgroundColor: "#2C55D3" },
  };
};

const Control = () => {
  return (
    <Tab.Navigator
      screenOptions={createScreenOptions}
      tabBarOptions={{
        activeTintColor: "#F2C159",
        inactiveTintColor: "white",
      }}
      initialRouteName="Homepage"
    >
      <Tab.Screen
        name="Home"
        component={Homescreens}
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: "black",
          },
          headerTitleStyle: {
            color: "white",
          },
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Acctscreens}
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: "black",
          },
          headerTitleStyle: {
            color: "white",
          },
        }}
      />

      <Tab.Screen
        name="Settings"
        component={Settingsscreen}
        options={{
          headerShown: false,
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
        name="Welcome"
        component={Welcomescreens}
      />

      <Stack.Screen
        options={{ headerShown: false }}
        name="Login"
        component={Loginscreens}
      />

      <Stack.Screen
        options={{ headerShown: false }}
        name="Product"
        component={Productscreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Image"
        component={Imagescreens}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Acct"
        component={Profilescreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Description"
        component={Descriptionscreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Name"
        component={Namescreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Language"
        component={Languagescreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Note"
        component={Notesscreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Summary"
        component={Summarizescreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Grammar"
        component={Grammarscreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="General"
        component={Generalscreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Song"
        component={Songscreen}
      />

      <Stack.Screen
        options={{ headerShown: false }}
        name="Record"
        component={Recordscreen}
      />

      <Stack.Screen
        options={{ headerShown: false }}
        name="Register"
        component={RegisterScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Reset"
        component={ResetPassword}
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
