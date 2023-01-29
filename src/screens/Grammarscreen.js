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
import { KEYS } from "@env";

console.log(KEYS);

const Grammarscreen = () => {
  const navigation = useNavigation();
  const [response, setResponse] = useState(null);
  const [body, setBody] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  let url;
  if (response && response.data && response.data[0]) {
    url = response.data[0].url;
  }

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
    navigation.navigate("Product");
  };

  const callAi = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("https://api.openai.com/v1/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${KEYS}`,
        },
        body: JSON.stringify({
          model: "text-davinci-003",
          prompt: body,
          temperature: 0.8,
          max_tokens: 100,
          top_p: 1,
          frequency_penalty: 0,
          presence_penalty: 0,
        }),
      });
      const json = await res.json();
      setResponse(json);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };
  console.log(response);

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
            <Text style={styles.Imagecontainertext}>Grammar correction</Text>
          </View>
        </LinearGradient>
      </View>
      <ScrollView>
        <View style={styles.guidetext}>
          <Text style={styles.guidetext1}>
            This AI is capable of performing tasks like correcting grammatical
            error in sentences
          </Text>
        </View>

        <View style={styles.guidetext}>
          <Text style={styles.guidetext1}>
            Type in your task in the prompt below and let AI respond with the
            suitable response
          </Text>
        </View>

        <View style={styles.view1}>
          <Text style={styles.guidetext2}>
            Correct this english "she no went to the market"
          </Text>
          <TextInput
            placeholder="Type prompt..."
            onChangeText={setBody}
            value={body}
            style={styles.input1}
          />
          <TouchableOpacity onPress={callAi} style={styles.touch1}>
            <Text style={styles.btntext}>SUBMIT</Text>
            <FontAwesome
              style={styles.btntexticon1}
              name="repeat"
              size={34}
              color="black"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.space}>
          {isLoading ? (
            <ActivityIndicator size="large" color="##EEBA00" />
          ) : (
            response && (
              <Text style={styles.respboxtext}>
                {JSON.stringify(response.choices[0].text.split("\n").join(""))}
              </Text>
            )
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
  },

  input1: {
    height: 60,
    fontSize: 18,
    width: 380,
    paddingLeft: 10,
    paddingTop: 0,
    backgroundColor: "white",
    color: "black",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
  },

  view1: {
    justifyContent: "space-evenly",
    alignItems: "center",
    borderTopWidth: 0,
    borderColor: "gray",
    paddingRight: 5,
    paddingTop: 40,
    paddingBottom: 35,
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
    fontFamily: "Orbitron",
  },
  btntexticon1: {
    color: "white",
    textAlign: "center",

    fontSize: 20,
    paddingLeft: 10,
    paddingTop: 0,
    fontWeight: "bold",
  },
  btntexticon: {
    color: "white",
    textAlign: "center",

    fontSize: 20,
    paddingLeft: 20,
    paddingTop: 0,
    fontWeight: "bold",
  },
  btntext: {
    color: "white",
    textAlign: "center",

    fontSize: 20,

    paddingTop: 0,
    fontWeight: "bold",
  },
  touch1: {
    alignItems: "center",
    justifyContent: "center",
    width: 370,
    height: 50,
    marginTop: 30,
    flexDirection: "row",
    borderRadius: 20,
    backgroundColor: "#308D8D",
  },
  guidetext: {
    justifyContent: "flex-end",
    marginTop: 20,
    marginLeft: 30,
    width: 350,
  },
  guidetextlist: {
    justifyContent: "flex-end",
    marginTop: 5,
    marginLeft: 30,
    width: 350,
  },
  guidetext1: {
    textAlign: "left",
    fontSize: 17,
    fontWeight: "400",
    color: "black",
    fontFamily: "interregular",
  },

  guidetext2: {
    fontSize: 15,
    fontWeight: "400",
    color: "#7E7E7E",
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    fontFamily: "interregular",
  },
  respbox: {
    width: 370,
    height: 350,
    marginLeft: 22,
    backgroundColor: "#308D8D",
    justifyContent: "center",
    borderRadius: 10,
    marginBottom: 200,
  },
  respboxtext: {
    fontSize: 18,
    fontWeight: "500",
    fontStyle: "normal",
    color: "black",

    fontFamily: "interregular",
    paddingLeft: 15,
    paddingRight: 5,
    letterSpacing: 1,
    lineHeight: 40,
  },
  space: {
    marginBottom: 300,
  },
});

export default Grammarscreen;
