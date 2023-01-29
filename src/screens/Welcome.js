import React, { useRef, animateuseState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import LottieView from "lottie-react-native";

const Welcomescreens = () => {
  const navigation = useNavigation();
  const animation = useRef(null);

  const handlePress1 = () => {
    navigation.navigate("Login");
  };

  const handlePress2 = () => {
    navigation.navigate("Register");
  };
  const [fontsLoaded] = useFonts({
    Orbitron: require("../assets/fonts/Orbitron-Black.ttf"),
    interblack: require("../assets/fonts/Inter-Black.ttf"),
    interextra: require("../assets/fonts/Inter-ExtraBold.ttf"),
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
      <LottieView
        autoPlay
        ref={animation}
        style={{
          width: 200,
          height: 100,
        }}
        source={require("../assets/b2.json")}
      />
      <LottieView
        autoPlay
        ref={animation}
        style={{
          width: 200,
          height: 100,
        }}
        source={require("../assets/b1.json")}
      />

      <View style={styles.Imagecontainer}>
        <Image source={require("../assets/sat3.png")} />
      </View>
      <View style={styles.Textcontainer}>
        <Text style={styles.logotext}>NEURA</Text>
      </View>

      <View style={styles.Textcontainer1}>
        <TouchableOpacity onPress={handlePress1} style={styles.touch2}>
          <Text style={styles.btntext}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePress2} style={styles.touch2}>
          <Text style={styles.btntext}>Sign Up</Text>
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
    marginTop: 30,
  },

  logotext: {
    fontSize: 60,
    color: "white",
    fontWeight: "bold",
    fontFamily: "Orbitron",
    letterSpacing: 15,
  },
  Textcontainer: {
    marginTop: 10,
    marginLeft: 10,
  },
  Textcontainer1: {
    marginTop: 300,

    flexDirection: "row",
  },
  introtext: {
    fontSize: 15,
    color: "white",
    fontWeight: "bold",
    fontFamily: "interregular",
  },
  Btncontainer: {
    marginTop: 180,
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
    fontFamily: "interextra",
    paddingTop: 15,
    paddingBottom: 15,
  },
  btntext1: {
    color: "white",
    textAlign: "center",
    fontSize: 23,
    fontFamily: "interextra",
    paddingTop: 15,
  },
  touch1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "white",
    width: 360,
    borderRadius: 10,
  },
  touch2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "#43A6DD",
    width: 180,
    borderRadius: 10,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    height: 60,
  },
  btnicon: {
    marginTop: 15,
    marginLeft: 12,
    paddingBottom: 20,
  },
  input1: {
    color: "black",
  },
});

export default Welcomescreens;
