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

const Homescreens = () => {
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    Orbitron: require("../assets/fonts/Orbitron-Black.ttf"),
    League: require("../assets/fonts/LeagueSpartan-Black.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const handlePress1 = () => {
    navigation.navigate("Image");
  };
  const handlePress3 = () => {
    navigation.navigate("Adv");
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
            <Text style={styles.Image2containertext}>INTELLI</Text>
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
          <View style={styles.imagesection}>
            <TouchableOpacity onPress={handlePress1}>
              <Image
                style={styles.Image1}
                source={require("../assets/int1.jpg")}
              />
            </TouchableOpacity>

            <Text style={styles.text1}>AI IMAGE </Text>
            <Text style={styles.text11}> GENERATOR</Text>
          </View>

          <View style={styles.imagesection}>
            <TouchableOpacity onPress={handlePress2}>
              <Image
                style={styles.Image2}
                source={require("../assets/int3.jpg")}
              />
            </TouchableOpacity>
            <Text style={styles.text2}>NAME</Text>
            <Text style={styles.text22}>GENERATOR</Text>
          </View>

          <View style={styles.imagesection}>
            <TouchableOpacity onPress={handlePress3}>
              <Image
                style={styles.Image3}
                source={require("../assets/int2.jpg")}
              />
            </TouchableOpacity>
            <Text style={styles.text3}>AI-AD</Text>
            <Text style={styles.text33}>GENERATOR</Text>
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
  Imagecontainer: {
    marginTop: 40,
    marginRight: 40,
  },
  headertext: {
    fontSize: 45,
    color: "#2457C5",
    fontWeight: "bold",
    fontFamily: "League",
    marginLeft: 10,
  },

  photocontainer: {
    marginTop: 40,
    marginLeft: 30,
  },
  Image2container: {
    marginTop: 40,
    marginLeft: 40,
  },
  Image2containertext: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
    fontFamily: "Orbitron",
  },
  aioptions: {
    justifyContent: "center",
    marginLeft: 30,
  },
  Image1: {
    height: 200,
    width: 350,
    marginBottom: 80,
    marginTop: 20,
    borderRadius: 10,
    borderColor: "#F2C159",
    borderWidth: 5,
  },
  Image2: {
    height: 200,
    width: 350,
    marginBottom: 80,
    borderRadius: 10,
    borderColor: "#F2C159",
    borderWidth: 5,
  },
  Image3: {
    height: 200,
    width: 350,
    borderRadius: 10,
    marginBottom: 300,
    borderColor: "#F2C159",
    borderWidth: 5,
  },
  text1: {
    position: "absolute",
    top: 70,
    left: 60,
    alignSelf: "center",
    fontSize: 50,
    fontWeight: "bold",
    color: "white",
    fontFamily: "League",
  },
  text11: {
    position: "absolute",
    top: 120,
    left: 20,
    alignSelf: "center",
    fontSize: 50,
    fontWeight: "bold",
    color: "white",
    fontFamily: "League",
  },
  text2: {
    position: "absolute",
    top: 60,
    left: 100,
    alignSelf: "center",
    fontSize: 50,
    fontWeight: "bold",
    color: "white",
    fontFamily: "League",
  },
  text22: {
    position: "absolute",
    top: 110,
    left: 30,
    alignSelf: "center",
    fontSize: 50,
    fontWeight: "bold",
    color: "white",
    fontFamily: "League",
  },
  text3: {
    position: "absolute",
    top: 60,
    left: 110,
    alignSelf: "center",
    fontSize: 50,
    fontWeight: "bold",
    color: "white",
    fontFamily: "League",
  },
  text33: {
    position: "absolute",
    top: 110,
    left: 40,
    alignSelf: "center",
    fontSize: 50,
    fontWeight: "bold",
    color: "white",
    fontFamily: "League",
  },
  imagesection: {
    position: "relative",
  },
  contentContainer: {
    paddingLeft: 5,
  },
});

export default Homescreens;
