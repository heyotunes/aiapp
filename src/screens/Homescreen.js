import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";

const Homescreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.photocontainer}>
        <Text>i am home screen </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "black",
  },

  movieText: {
    fontSize: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
  btn: {
    height: 60,
    width: 300,
    borderRadius: 20,
    backgroundColor: "#F56B1D",
    marginBottom: 430,
    marginTop: 30,
  },
  photo: {
    height: 80,
    marginTop: -150,
  },
  photocontainer: {
    marginTop: 220,
  },
});

export default Homescreen;
