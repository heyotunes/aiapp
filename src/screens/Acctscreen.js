import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  Image,
  Button,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import { doc, onSnapshot, collection } from "firebase/firestore";
import { db, auth } from "../firebase";

const Acctscreens = () => {
  const navigation = useNavigation();
  const [firstname, setFirstname] = useState("");
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    let unsub;
    const fetchProfile = async () => {
      unsub = onSnapshot(doc(db, "Users", auth.currentUser.uid), (snapshot) => {
        setProfiles({
          id: snapshot.id,
          ...snapshot.data(),
        });
      });
    };
    fetchProfile();
    return unsub;
  }, []);

  console.log(profiles);

  //useEffect(
  // () =>
  // onSnapshot(doc(db, "Users", auth.currentUser.uid), (snapshot) => {
  // setFirstname(snapshot.get("firstname"));
  // }),
  //[]
  //);

  const gotoprofile = () => {
    navigation.navigate("Acct");
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#1D76C9", "#2D52D3"]}
        style={styles.logocontainer}
      >
        <View style={styles.Image2container}>
          <Text style={styles.Image2containertext}>NEURAL</Text>
        </View>
        <View style={styles.Imagecontainer}>
          <Image source={require("../assets/sa1.png")} />
        </View>
      </LinearGradient>
      <View style={styles.btncontainer}>
        <View style={styles.ptext1}>
          <View style={styles.ptext11}>
            <Text style={styles.text1}>Firstname</Text>
            <Text style={styles.text11}>{profiles.firstname}</Text>
          </View>
          <View style={styles.ptext11}>
            <Text style={styles.text1}>Lastname</Text>
            <Text style={styles.text11}>{profiles.lastname}</Text>
          </View>
        </View>
        <View>
          <View style={styles.ptext1}>
            <View style={styles.ptext11}>
              <Text style={styles.text1}>College</Text>
              <Text style={styles.text11}>{profiles.college}</Text>
            </View>
            <View style={styles.ptext11}>
              <Text style={styles.text1}>Occupation</Text>
              <Text style={styles.text11}>{profiles.occupation}</Text>
            </View>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.touch1} onPress={gotoprofile}>
        <Text style={styles.btn1}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F8F8F8",
  },

  logocontainer: {
    alignItems: "center",
    backgroundColor: "blue",
    height: 120,
    width: 430,
    flexDirection: "row",
    justifyContent: "space-between",
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
  Imagecontainer: {
    marginTop: 40,
    marginRight: 40,
  },
  ptext1: {
    flexDirection: "column",
    marginTop: 20,
    justifyContent: "space-between",
    marginVertical: 0,
  },
  ptext11: {
    width: "40%",
  },
  text1: {
    alignSelf: "left",
    fontSize: 22,
    fontWeight: "bold",
    color: "black",
    fontFamily: "interextra",
    marginBottom: 5,
    color: "#1D76C9",
  },
  text11: {
    alignSelf: "left",
    fontSize: 20,

    color: "#8E8E8E",
    fontFamily: "interregular",
    marginBottom: 50,
    width: 400,
  },

  touch1: {
    height: 60,
    width: 350,

    borderRadius: 20,
    backgroundColor: "#2457C5",

    marginTop: 80,

    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 },
  },
  btncontainer: {
    display: "flex",
    marginLeft: 50,
    marginTop: 30,
  },
  btn1: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 15,
  },
  avatar: {
    width: 100,
    height: 50,
    borderColor: "blue",
    borderWidth: 3,
  },
});

export default Acctscreens;
