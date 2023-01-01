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

const Acctscreens = () => {
  const navigation = useNavigation();
  const handlePress1 = () => {
    navigation.navigate("Home");
  };
  const gotoprofile = () => {
    navigation.navigate("Profile");
  };

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
          <TouchableOpacity onPress={handlePress1}>
            <Ionicons name="chevron-back" size={34} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.Imagecontainer}>
          <Text style={styles.Imagecontainertext}>SYNTELLIGENT</Text>
        </View>
      </LinearGradient>

      <View style={styles.btncontainer}>
        <TouchableOpacity style={styles.touch1} onPress={gotoprofile}>
          <Text style={styles.btn1}>Edit Profile</Text>
        </TouchableOpacity>

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
    marginTop: 40,
    marginRight: 35,
  },
  headertext: {
    fontSize: 45,
    color: "#2457C5",
    fontWeight: "bold",
    fontFamily: "League",
    marginLeft: 10,
  },

  Image2container: {
    marginTop: 40,
    marginLeft: 15,
  },
  Imagecontainertext: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  touch1: {
    height: 60,
    width: 300,

    borderRadius: 20,
    backgroundColor: "#2457C5",

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
    marginTop: 250,
  },
  btn1: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 15,
  },
});

export default Acctscreens;
