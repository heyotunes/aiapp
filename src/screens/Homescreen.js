import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import { doc, onSnapshot } from "firebase/firestore";
import { db, auth } from "../firebase";

const Homescreens = () => {
  useEffect(
    () =>
      onSnapshot(doc(db, "Users", auth.currentUser.uid), (snapshot) => {
        if (!snapshot.exists()) {
          navigation.navigate("Profile");
        }
      }),
    []
  );

  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    Orbitron: require("../assets/fonts/Orbitron-Black.ttf"),
    interblack: require("../assets/fonts/Inter-Black.ttf"),
    interextra: require("../assets/fonts/Inter-ExtraBold.ttf"),
    interregular: require("../assets/fonts/Inter-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const handlePress1 = () => {
    navigation.navigate("Image");
  };

  const handlePress2 = () => {
    navigation.navigate("Product");
  };

  return (
    <View>
      <View style={styles.headercontainer}>
        <LinearGradient
          colors={["#1D76C9", "#2D52D3"]}
          style={styles.logocontainer}
        >
          <View style={styles.Image2container}>
            <Text style={styles.Image2containertext}>SYNTELLIGENT</Text>
          </View>
          <View style={styles.Imagecontainer}>
            <Image source={require("../assets/icon1.png")} />
          </View>
        </LinearGradient>
      </View>

      <View style={styles.photocontainer}>
        <Text style={styles.headertext}>AI-TOOLS</Text>
      </View>
      <ScrollView style={styles.contentContainer}>
        <View style={styles.aioptions}>
          <TouchableOpacity onPress={handlePress1}>
            <LinearGradient
              colors={["#FF6363", "#D2617C"]}
              style={styles.Aicontainer}
            >
              <View style={styles.imagesection}>
                <TouchableOpacity onPress={handlePress1}>
                  <Image
                    style={styles.Image1}
                    source={require("../assets/photos3.png")}
                  />
                </TouchableOpacity>
              </View>
            </LinearGradient>
          </TouchableOpacity>
          <View style={styles.contentdescription}>
            <Text style={styles.text1}>IMAGE-GENERATOR</Text>
            <Text style={styles.text11}>
              Use AI to convert Text to beautiful images
            </Text>
          </View>

          <TouchableOpacity onPress={handlePress2}>
            <LinearGradient
              colors={["#4375F6", "#312FA3"]}
              style={styles.Aicontainer}
            >
              <View style={styles.imagesection}>
                <TouchableOpacity onPress={handlePress2}>
                  <Image
                    style={styles.Image1}
                    source={require("../assets/brain3.png")}
                  />
                </TouchableOpacity>
              </View>
            </LinearGradient>
          </TouchableOpacity>
          <View style={styles.contentdescription}>
            <Text style={styles.text1}>Syntelligent</Text>
            <Text style={styles.text11}>
              Ask AI any questions and perform any task you can think of
            </Text>
          </View>
        </View>
        <View style={styles.freespace}></View>
      </ScrollView>
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
    height: 130,
    width: 430,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  Aicontainer: {
    alignItems: "center",
    backgroundColor: "blue",
    height: 200,
    width: 350,
    borderRadius: 5,
    marginBottom: 40,
    marginTop: 30,
  },
  Imagecontainer: {
    marginTop: 40,
    marginRight: 40,
  },
  headertext: {
    fontSize: 45,
    color: "#2457C5",
    fontWeight: "bold",
    fontFamily: "interblack",
    marginLeft: 10,
  },

  photocontainer: {
    marginTop: 40,
    marginLeft: 30,
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
  aioptions: {
    justifyContent: "center",
    marginLeft: 30,
  },
  Image1: {
    height: 100,
    width: 100,
    marginBottom: 100,
    marginTop: 45,
  },

  text1: {
    alignSelf: "left",
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    fontFamily: "interextra",
    marginBottom: 5,
  },
  text11: {
    alignSelf: "left",
    fontSize: 18,
    fontWeight: "light",
    color: "black",
    fontFamily: "interregular",
    marginBottom: 20,
  },
  contentdescription: {
    justifyContent: "flex-end",
    marginTop: -20,
    marginLeft: 1,
  },

  contentContainer: {
    paddingLeft: 5,
  },
  freespace: {
    marginTop: 200,
    marginBottom: 50,
  },
});

export default Homescreens;
