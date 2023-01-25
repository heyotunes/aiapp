import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  Image,
  Button,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { getAuth, deleteUser } from "firebase/auth";

const Settingsscreen = () => {
  const navigation = useNavigation();

  const logout = () => {
    signOut(auth).then(() => {
      navigation.navigate("Login");
    });
  };

  return (
    <View style={styles.headercontainer}>
      <LinearGradient
        colors={["#1D76C9", "#2D52D3"]}
        style={styles.logocontainer}
      >
        <View style={styles.Image2container}>
          <Text style={styles.Image2containertext}>NEURAL</Text>
        </View>
        <View style={styles.Imagecontainer}>
          <Image source={require("../assets/icon1.png")} />
        </View>
      </LinearGradient>

      <View style={styles.btncontainer}>
        <TouchableOpacity onPress={logout} style={styles.touch1}>
          <Text style={styles.btn1}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "black",
  },

  logocontainer: {
    alignItems: "center",
    backgroundColor: "blue",
    height: 120,
    width: 430,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  Imagecontainer: {
    marginTop: 50,
    marginRight: 20,
  },
  headertext: {
    fontSize: 45,
    color: "#2457C5",
    fontWeight: "bold",
    fontFamily: "League",
    marginLeft: 10,
  },
  Image2container: {
    marginTop: 45,
    marginLeft: 25,
  },
  Image2containertext: {
    fontSize: 25,
    color: "white",
    fontWeight: "bold",
    fontFamily: "Orbitron",
  },

  Imagecontainertext: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Orbitron",
  },
  touch1: {
    borderBottomWidth: 1,
    borderColor: "#1D76C9",
    width: 420,
    marginTop: 10,

    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 },
  },
  btncontainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0,
  },
  btn1: {
    color: "#1D76C9",

    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 30,
  },
});

export default Settingsscreen;
