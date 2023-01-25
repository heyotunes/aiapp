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
import { auth, db } from "../firebase";
import { signOut } from "firebase/auth";
import { serverTimestamp, setDoc, doc } from "firebase/firestore";

const Profilescreen = () => {
  const navigation = useNavigation();
  const [firstname, setFirstname] = useState(null);
  const [lastname, setLastname] = useState(null);
  const [occupation, setOccupation] = useState(null);
  const [phonenumber, setPhonenumber] = useState(null);
  const [college, setCollege] = useState(null);

  const [fontsLoaded] = useFonts({
    Orbitron: require("../assets/fonts/Orbitron-Black.ttf"),
    interblack: require("../assets/fonts/Inter-Black.ttf"),
    interextra: require("../assets/fonts/Inter-ExtraBold.ttf"),
    interregular: require("../assets/fonts/Inter-Regular.ttf"),
    interbold: require("../assets/fonts/Inter-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const updateUserProfile = () => {
    setDoc(doc(db, "Users", auth.currentUser.uid), {
      id: auth.currentUser.uid,

      firstname: firstname,
      lastname: lastname,
      occupation: occupation,
      phonenumber: phonenumber,
      college: college,
      timestamp: serverTimestamp(),
    })
      .then(() => {
        navigation.navigate("Home");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const submitform = () => {
    updateUserProfile();
  };

  const handlePress1 = () => {
    navigation.navigate("Profile");
  };

  return (
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
        <Text style={styles.Imagecontainertext}>Add-Profile</Text>
      </View>

      <View style={styles.inputviewcontainer}>
        <ScrollView style={styles.contentContainer}>
          <View style={styles.inputview}>
            <Text style={styles.textguide}>First name</Text>
            <TextInput
              style={styles.inputText}
              value={firstname}
              onChangeText={setFirstname}
              placeholder="Enter your firstname"
            />
            <Text style={styles.textguide}>Last name</Text>
            <TextInput
              style={styles.inputText}
              value={lastname}
              onChangeText={setLastname}
              placeholder="Enter your lastname"
            />
            <Text style={styles.textguide}>Occupation</Text>
            <TextInput
              style={styles.inputText}
              value={occupation}
              onChangeText={setOccupation}
              placeholder="What kind of job are you into?"
            />

            <Text style={styles.textguide}>College</Text>
            <TextInput
              style={styles.inputText}
              value={college}
              onChangeText={setCollege}
              placeholder="Enter your school name"
            />
          </View>

          <TouchableOpacity onPress={() => submitform()} style={styles.button}>
            <Text style={styles.textStyle}>Complete Profile</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  logocontainer: {
    flexDirection: "row",
    flex: 1,
  },
  Imagecontainer: {
    marginTop: 110,
    marginLeft: 83,
  },
  headertext: {
    fontSize: 45,
    color: "#2457C5",
    fontWeight: "bold",

    marginLeft: 10,
  },
  inputviewcontainer: {
    marginTop: 180,
    marginLeft: -280,
  },
  inputText: {
    fontSize: 15,
    paddingBottom: 17,
    paddingTop: 17,
    paddingLeft: 20,
    textAlign: "left",
    borderWidth: 1,
    marginTop: 15,
    marginBottom: 30,
    width: 370,
    borderRadius: 10,
    borderColor: "white",
    backgroundColor: "white",
  },

  Image2container: {
    marginTop: 80,
    marginLeft: 25,
  },
  Imagecontainertext: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    fontFamily: "interbold",
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
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "interbold",
  },
  textguide: {
    color: "white",
    fontWeight: "bold",
    textAlign: "left",
    fontSize: 20,
    fontFamily: "interbold",
  },

  button: {
    borderRadius: 20,
    padding: 20,
    marginTop: 50,
    elevation: 2,
    marginTop: 100,
    borderWidth: 1,
    marginBottom: 150,
    borderColor: "white",
  },
  contentContainer: {
    paddingLeft: 0,
  },
});

export default Profilescreen;
