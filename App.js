import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Acctnav from "./src/navigation/Mainnav";

import "react-native-url-polyfill/auto";
export default function App() {
  return (
    <NavigationContainer>
      <Acctnav />
    </NavigationContainer>
  );
}
