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
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";
import * as Permissions from "expo-permissions";
import { KEYS } from "@env";
console.log(KEYS);
const Imagescreens = () => {
  const navigation = useNavigation();
  const [response, setResponse] = useState(null);
  const [body, setBody] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [downloadComplete, setDownloadComplete] = useState(false);
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

  const askForPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
    if (status === "granted") {
      console.log("Media library permission granted");
    } else {
      console.log("Media library permission denied");
    }
  };

  const addToMediaLibrary = async () => {
    const { uri } = await FileSystem.downloadAsync(
      response.data[0].url,
      FileSystem.cacheDirectory + "image.jpg"
    );
    const asset = await MediaLibrary.createAssetAsync(uri);
    console.log("Asset added to media library:", asset);
  };

  const downloadImage = async () => {
    await askForPermission();
    const { uri } = await FileSystem.downloadAsync(
      response.data[0].url,
      FileSystem.cacheDirectory + "image.jpg"
    );
    console.log("Finished downloading to ", uri);
    addToMediaLibrary();
    Alert.alert(
      "Download complete",
      "The image has been successfully downloaded.",
      [{ text: "OK" }]
    );
  };

  const handlePress1 = () => {
    navigation.navigate("Home");
  };

  const callAi = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("https://api.openai.com/v1/images/generations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${KEYS}`,
        },
        body: JSON.stringify({
          prompt: body,
          n: 1,
          size: "1024x1024",
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
            <Text style={styles.Imagecontainertext}>IMAGE-GENERATOR</Text>
          </View>
        </LinearGradient>
      </View>
      <ScrollView>
        <View style={styles.guidetext}>
          <Text style={styles.guidetext1}>
            This AI is capable of generating stunning images with just a text
            input. Use the template below to get started
          </Text>
        </View>

        <View style={styles.view1}>
          <Text style={styles.guidetext2}>"A white lion "</Text>
          <TextInput
            placeholder="Type prompt..."
            onChangeText={setBody}
            value={body}
            style={styles.input1}
          />
          <TouchableOpacity onPress={callAi} style={styles.touch1}>
            <Text style={styles.btntext}>GET-IMAGE</Text>
            <FontAwesome
              style={styles.btntexticon1}
              name="repeat"
              size={34}
              color="black"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.Photocontainer}>
          {isLoading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : (
            <Image source={{ uri: url }} style={{ width: 350, height: 450 }} />
          )}
        </View>
        {response && (
          <View style={styles.Downloadcontainer}>
            <TouchableOpacity onPress={downloadImage} style={styles.touch2}>
              <Text style={styles.btntext}>DOWNLOAD</Text>

              <FontAwesome
                style={styles.btntexticon}
                name="cloud-download"
                size={34}
                color="black"
              />
            </TouchableOpacity>
          </View>
        )}
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
  notification: {
    fontSize: 20,
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
    width: 380,
    height: 50,
    marginTop: 10,

    flexDirection: "row",
    borderRadius: 20,
    backgroundColor: "#3997EE",
  },
  touch2: {
    alignItems: "center",
    justifyContent: "center",
    width: 380,
    height: 50,
    marginTop: 20,
    marginRight: 200,
    flexDirection: "row",
    borderRadius: 20,
    backgroundColor: "#3997EE",
  },
  guidetext: {
    justifyContent: "center",
    marginTop: 20,
    marginLeft: 30,
    width: 350,
  },
  guidetext1: {
    textAlign: "left",
    fontSize: 18,
    fontWeight: "400",
    color: "#2266A5",
    fontFamily: "interregular",
  },
  guidetext2: {
    fontSize: 16,
    fontWeight: "400",
    color: "#7E7E7E",
    paddingBottom: 10,
    fontFamily: "interregular",
  },
  Photocontainer: {
    justifyContent: "center",
    marginLeft: 30,
    marginTop: 10,
    marginBottom: 0,
  },
  Downloadcontainer: {
    marginLeft: 15,
    flexDirection: "column",
    marginBottom: 200,
  },
});

export default Imagescreens;
