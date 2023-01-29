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
import { Ionicons, MaterialIcons, FontAwesome } from "@expo/vector-icons";

const Productscreen = () => {
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
    navigation.navigate("Home");
  };

  const handlePress2 = () => {
    navigation.navigate("General");
  };
  const handlePress3 = () => {
    navigation.navigate("Grammar");
  };
  const handlePress4 = () => {
    navigation.navigate("Language");
  };
  const handlePress5 = () => {
    navigation.navigate("Note");
  };
  const handlePress6 = () => {
    navigation.navigate("Name");
  };
  const handlePress7 = () => {
    navigation.navigate("Description");
  };

  const handlePress8 = () => {
    navigation.navigate("Summary");
  };

  const handlePress9 = () => {
    navigation.navigate("Song");
  };

  return (
    <View>
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
            <Text style={styles.Image2containertext}>Ai-Tools</Text>
          </View>
        </LinearGradient>
      </View>

      <ScrollView style={styles.contentContainer}>
        <View style={styles.aioptions}>
          <TouchableOpacity onPress={handlePress2}>
            <LinearGradient
              colors={["#43ECF6", "#DF41CF"]}
              style={styles.Aicontainer}
            >
              <View style={styles.imagesection}>
                <TouchableOpacity onPress={handlePress2}>
                  <Image
                    style={styles.Image1}
                    source={require("../assets/scroll1.png")}
                  />
                </TouchableOpacity>
              </View>
            </LinearGradient>
          </TouchableOpacity>
          <View style={styles.contentdescription}>
            <Text style={styles.text1}>Quick Script</Text>
            <Text style={styles.text11}>
              Use AI to generate Quick Scripts for taklkshows and podcasts
            </Text>
          </View>

          <TouchableOpacity onPress={handlePress9}>
            <LinearGradient
              colors={["#F6CF43", "#D8D240"]}
              style={styles.Aicontainer}
            >
              <View style={styles.imagesection}>
                <TouchableOpacity onPress={handlePress9}>
                  <Image
                    style={styles.Image1}
                    source={require("../assets/song.png")}
                  />
                </TouchableOpacity>
              </View>
            </LinearGradient>
          </TouchableOpacity>
          <View style={styles.contentdescription}>
            <Text style={styles.text1}>Song composer</Text>
            <Text style={styles.text11}>
              Use AI to compose your song ideas to life
            </Text>
          </View>

          <TouchableOpacity onPress={handlePress3}>
            <LinearGradient
              colors={["#43F6CB", "#308D8D"]}
              style={styles.Aicontainer}
            >
              <View style={styles.imagesection}>
                <TouchableOpacity onPress={handlePress3}>
                  <Image
                    style={styles.Image1}
                    source={require("../assets/grammar.png")}
                  />
                </TouchableOpacity>
              </View>
            </LinearGradient>
          </TouchableOpacity>
          <View style={styles.contentdescription}>
            <Text style={styles.text1}>Grammar correction</Text>
            <Text style={styles.text11}>
              Corrects sentences into standard English.
            </Text>
          </View>

          <TouchableOpacity onPress={handlePress4}>
            <LinearGradient
              colors={["#DDF643", "#989A2A"]}
              style={styles.Aicontainer}
            >
              <View style={styles.imagesection}>
                <TouchableOpacity onPress={handlePress4}>
                  <Image
                    style={styles.Image1}
                    source={require("../assets/translate.png")}
                  />
                </TouchableOpacity>
              </View>
            </LinearGradient>
          </TouchableOpacity>
          <View style={styles.contentdescription}>
            <Text style={styles.text1}>Translate language</Text>
            <Text style={styles.text111}>
              Translates English text into any language in the world
            </Text>
          </View>

          <TouchableOpacity onPress={handlePress5}>
            <LinearGradient
              colors={["#FD6262", "#861A1A"]}
              style={styles.Aicontainer}
            >
              <View style={styles.imagesection}>
                <TouchableOpacity onPress={handlePress5}>
                  <Image
                    style={styles.Image1}
                    source={require("../assets/hash.png")}
                  />
                </TouchableOpacity>
              </View>
            </LinearGradient>
          </TouchableOpacity>
          <View style={styles.contentdescription}>
            <Text style={styles.text1}>Notes to summary</Text>
            <Text style={styles.text11}>
              Turn meeting notes into a summary.
            </Text>
          </View>

          <TouchableOpacity onPress={handlePress6}>
            <LinearGradient
              colors={["#F8B654", "#96782A"]}
              style={styles.Aicontainer}
            >
              <View style={styles.imagesection}>
                <TouchableOpacity onPress={handlePress6}>
                  <Image
                    style={styles.Image1}
                    source={require("../assets/thinking2.png")}
                  />
                </TouchableOpacity>
              </View>
            </LinearGradient>
          </TouchableOpacity>
          <View style={styles.contentdescription}>
            <Text style={styles.text1}>Name generator</Text>
            <Text style={styles.text11}>
              Create product names from examples words.
            </Text>
          </View>

          <TouchableOpacity onPress={handlePress7}>
            <LinearGradient
              colors={["#F66E43", "#9A3325"]}
              style={styles.Aicontainer}
            >
              <View style={styles.imagesection}>
                <TouchableOpacity onPress={handlePress7}>
                  <Image
                    style={styles.Image1}
                    source={require("../assets/ad.png")}
                  />
                </TouchableOpacity>
              </View>
            </LinearGradient>
          </TouchableOpacity>
          <View style={styles.contentdescription}>
            <Text style={styles.text1}>Ad from product description</Text>
            <Text style={styles.text11}>
              Turn a product description into ad copy.
            </Text>
          </View>

          <TouchableOpacity onPress={handlePress8}>
            <LinearGradient
              colors={["#67FC88", "#1B751E"]}
              style={styles.Aicontainer}
            >
              <View style={styles.imagesection}>
                <TouchableOpacity onPress={handlePress8}>
                  <Image
                    style={styles.Image1}
                    source={require("../assets/summarytext.png")}
                  />
                </TouchableOpacity>
              </View>
            </LinearGradient>
          </TouchableOpacity>
          <View style={styles.contentdescription}>
            <Text style={styles.text1}>Summarize text</Text>
            <Text style={styles.text111}>
              Translates difficult text into simpler concepts.
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
    width: 375,
    borderRadius: 20,
    marginBottom: 40,
    marginTop: 30,
    marginLeft: -14,
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
    marginLeft: 15,
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
    fontSize: 15,
    fontWeight: "light",
    color: "black",
    fontFamily: "interregular",
    marginBottom: 20,
    paddingRight: 30,
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

export default Productscreen;
