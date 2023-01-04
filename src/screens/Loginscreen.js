import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Entypo } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import * as WebBrowser from "expo-web-browser";
import * as Random from "expo-random";
import * as Google from "expo-auth-session/providers/google";
import { GoogleAuthProvider, signInWithCredential } from "firebase/auth";
import { GOOGLE_KEYS } from "@env";

import { auth } from "../firebase";
WebBrowser.maybeCompleteAuthSession();

const Loginscreens = () => {
  const navigation = useNavigation();

  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: `${GOOGLE_KEYS}`,
  });
  useEffect(() => {
    console.log(response);
    if (response?.type === "success") {
      const { id_token } = response.params;

      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential);
      navigation.navigate("Main", { response });
    }
  }, [response]);
  const [fontsLoaded] = useFonts({
    Orbitron: require("../assets/fonts/Orbitron-Black.ttf"),
    interregular: require("../assets/fonts/Inter-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <LinearGradient
      colors={["#1D76C9", "#2D52D3"]}
      style={styles.logocontainer}
    >
      <View style={styles.Imagecontainer}>
        <Image source={require("../assets/icon2.png")} />
      </View>
      <View style={styles.Textcontainer}>
        <Text style={styles.logotext}>NEURAL</Text>
      </View>

      <View style={styles.Textcontainer}>
        <Text style={styles.introtext}>
          Unleashing the power of artificial intelligence
        </Text>
      </View>
      <View style={styles.Btncontainer}>
        <TouchableOpacity
          disabled={!request}
          onPress={() => {
            promptAsync();
          }}
          style={styles.touch1}
        >
          <Text style={styles.btntext}>GOOGLE SIGN-IN</Text>
          <Entypo name="mail" size={30} color="white" style={styles.btnicon} />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  logocontainer: {
    alignItems: "center",

    flex: 1,
  },
  Imagecontainer: {
    marginTop: 100,
  },
  Textcontainer: {
    marginTop: 60,
  },
  logotext: {
    fontSize: 40,
    color: "white",
    fontWeight: "bold",
    fontFamily: "Orbitron",
  },
  Textcontainer: {
    marginTop: 60,
  },
  introtext: {
    fontSize: 15,
    color: "white",
    fontWeight: "bold",
    fontFamily: "interregular",
  },
  Btncontainer: {
    marginTop: 380,
  },
  Btnbg: {
    borderRadius: 20,
    width: 360,
    height: 70,
    marginTop: 20,
    shadowColor: "rgba(0, 0, 0, 0.9)",
    shadowOpacity: 0.8,
    elevation: 40,
    shadowRadius: 100,
    shadowOffset: { width: 1, height: 13 },
    borderColor: "white",
  },
  btntext: {
    color: "white",
    textAlign: "center",
    fontSize: 18,

    paddingTop: 15,
    paddingBottom: 15,
    fontWeight: "bold",
  },
  touch1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "white",
    width: 360,
    borderRadius: 20,
  },
  btnicon: {
    marginTop: 15,
    marginLeft: 12,
    paddingBottom: 20,
  },
});

export default Loginscreens;
