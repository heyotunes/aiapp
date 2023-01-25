import React, { useState, useEffect } from "react";
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
import { Entypo } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import * as WebBrowser from "expo-web-browser";
import * as Random from "expo-random";
import * as Google from "expo-auth-session/providers/google";
import { GoogleAuthProvider, signInWithCredential } from "firebase/auth";
import { GOOGLE_KEYS } from "@env";
import AppStyles from "../styles/AppStyles";
import InlineTextButton from "../components/inlineTextButton";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { signInWithGoogle } from "../firebase";

import { auth } from "../firebase";
WebBrowser.maybeCompleteAuthSession();

const Loginscreens = () => {
  const navigation = useNavigation();

  if (auth.currentUser) {
    navigation.navigate("Main");
  } else {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.navigate("Main");
      }
    });
  }

  let [errorMessage, setErrorMessage] = React.useState("");
  let [email, setEmail] = React.useState("");
  let [password, setPassword] = React.useState("");

  let login = () => {
    if (email !== "" && password !== "") {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          navigation.navigate("Main", { user: userCredential.user });
          setErrorMessage("");
          setEmail("");
          setPassword("");
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    } else {
      setErrorMessage("Please enter an email and password");
    }
  };

  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: `${GOOGLE_KEYS}`,
  });
  useEffect(() => {
    console.log(response);
    if (response?.type === "success") {
      const { id_token } = response.params;

      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential);
      navigation.navigate("Main", { response });
    }
  }, [response]);
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
      <View style={styles.Imagecontainer}>
        <Image source={require("../assets/sa2.png")} />
      </View>
      <View style={styles.Textcontainer}>
        <Text style={styles.logotext}>NEURAL</Text>
      </View>

      <View style={styles.Textcontainer1}>
        <Text style={styles.btntext1}>Sign In to continue</Text>
        <Text style={AppStyles.errorText}>{errorMessage}</Text>
        <TextInput
          style={[
            AppStyles.textInput,
            AppStyles.lightTextInput,
            AppStyles.lightText,
            styles.input1,
          ]}
          placeholder="Email"
          placeholderTextColor="#BEBEBE"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={[
            AppStyles.textInput,
            AppStyles.lightTextInput,
            AppStyles.lightText,
            styles.input1,
          ]}
          placeholder="Password"
          placeholderTextColor="#B6B3B3"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <View style={[AppStyles.rowContainer, AppStyles.topMargin]}>
          <Text style={AppStyles.lightText}>Don't have an account? </Text>
          <InlineTextButton
            text="Sign Up"
            onPress={() => navigation.navigate("Register")}
          />
        </View>
        <View style={[AppStyles.rowContainer, AppStyles.bottomMargin]}>
          <Text style={AppStyles.lightText}>Forgotten your password? </Text>
          <InlineTextButton
            text="Reset"
            onPress={() => navigation.navigate("Reset")}
          />
        </View>
        <TouchableOpacity onPress={login} style={styles.touch2}>
          <Text style={styles.btntext}>Sign In</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.Btncontainer}>
        <TouchableOpacity
          disabled={!request}
          onPress={() => {
            promptAsync();
          }}
          style={styles.touch1}
        >
          <Text style={styles.btntext}>Continue with Google</Text>
          <Entypo name="mail" size={30} color="white" style={styles.btnicon} />
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
    marginTop: 70,
  },

  logotext: {
    fontSize: 40,
    color: "white",
    fontWeight: "bold",
    fontFamily: "Orbitron",
  },
  Textcontainer: {
    marginTop: 10,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
  Textcontainer1: {
    marginTop: 30,
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
    width: 350,
    borderRadius: 10,
    marginTop: 10,
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

export default Loginscreens;
