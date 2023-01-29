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
  const [firstname, setFirstname] = useState("");
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    Orbitron: require("../assets/fonts/Orbitron-Black.ttf"),
    interblack: require("../assets/fonts/Inter-Black.ttf"),
    interextra: require("../assets/fonts/Inter-ExtraBold.ttf"),
    interregular: require("../assets/fonts/Inter-Regular.ttf"),
  });

  useEffect(() => {
    if (auth.currentUser) {
      onSnapshot(doc(db, "Users", auth.currentUser.uid), (snapshot) => {
        if (!snapshot.exists()) {
          navigation.navigate("Acct");
        } else {
          setFirstname(snapshot.get("firstname"));
        }
      });
    } else {
      // navigate to login screen or display a message asking user to log in
      navigation.navigate("Login");
    }
  }, []);

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
            <Text style={styles.Image2containertext}>NEURA</Text>
          </View>
          <View style={styles.Imagecontainer}>
            <Image source={require("../assets/sat1.png")} />
          </View>
        </LinearGradient>
      </View>

      <View style={styles.photocontainer}>
        <Text style={styles.headertext}>Welcome, {firstname}</Text>
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
            <Text style={styles.text1}>AI-Tools</Text>
            <Text style={styles.text111}>
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
    height: 120,
    width: 430,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  Aicontainer: {
    alignItems: "center",
    backgroundColor: "blue",
    height: 200,
    width: 375,
    borderRadius: 20,
    marginBottom: 40,
    marginTop: 30,
    marginLeft: -14,
  },

  headertext: {
    fontSize: 30,
    color: "#2266A5",
    fontWeight: "bold",
    fontFamily: "interblack",
    marginLeft: 10,
  },

  photocontainer: {
    marginTop: 30,
    marginLeft: 0,
    paddingLeft: 30,
    paddingBottom: 10,
    borderBottomColor: "#1D76C9",
    borderBottomWidth: 1,
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
    letterSpacing: 15,
  },
  Imagecontainer: {
    marginTop: 50,
    marginRight: 35,
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
    fontSize: 15,
    fontWeight: "light",
    color: "black",
    fontFamily: "interregular",
    marginBottom: 20,
    width: 400,
  },
  text111: {
    alignSelf: "left",
    fontSize: 15,
    fontWeight: "light",
    color: "black",
    fontFamily: "interregular",
    marginBottom: 20,
    width: 350,
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
