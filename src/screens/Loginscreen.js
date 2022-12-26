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

const Loginscreens = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#1D76C9", "#2D52D3"]}
        style={styles.logocontainer}
      >
        <View style={styles.Imagecontainer}>
          <Image source={require("../assets/icon2.png")} />
        </View>
        <View style={styles.Textcontainer}>
          <Image source={require("../assets/intelli.png")} />
        </View>
      </LinearGradient>

      <View style={styles.Btncontainer}>
        <LinearGradient colors={["#1D76C9", "#2D52D3"]} style={styles.Btnbg}>
          <TouchableOpacity style={styles.touch1}>
            <Text style={styles.btntext}>SIGN IN WITH GOOGLE</Text>
            <Entypo
              name="mail"
              size={34}
              color="white"
              style={styles.btnicon}
            />
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  logocontainer: {
    alignItems: "center",
    backgroundColor: "blue",
    height: 400,
    width: 430,
    borderBottomEndRadius: 60,
    borderBottomLeftRadius: 60,
  },
  Imagecontainer: {
    marginTop: 100,
  },
  Textcontainer: {
    marginTop: -200,
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
  },
  btntext: {
    color: "white",
    textAlign: "center",
    fontSize: 20,

    paddingTop: 20,
    fontWeight: "bold",
  },
  touch1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  btnicon: {
    marginTop: 15,
    marginLeft: 12,
  },
});

export default Loginscreens;