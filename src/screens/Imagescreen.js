import {
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  Button,
  TextInput,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";

const Imagescreen = () => {
  const [response, setResponse] = useState(null);
  const [body, setBody] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  let url;
  if (response && response.data && response.data[0]) {
    url = response.data[0].url;
  }

  const callAi = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("https://api.openai.com/v1/images/generations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer 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`,
        },
        body: JSON.stringify({
          prompt: body,
          n: 1,
          size: "256x256",
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
    <SafeAreaView style={styles.container}>
      <View style={styles.Imagecontainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <Image source={{ uri: url }} style={{ width: 300, height: 400 }} />
        )}
      </View>

      <View style={styles.view1}>
        <TextInput
          placeholder="Send Message..."
          onChangeText={setBody}
          value={body}
          style={styles.input1}
        />

        <Button
          onPress={callAi}
          title="Send"
          color="#F56B1D"
          style={styles.btn1}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  input1: {
    height: 60,
    fontSize: 20,
    width: 330,
    paddingLeft: 20,
    backgroundColor: "grey",
    color: "black",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 8,
  },
  btn1: {
    fontSize: 35,
    height: 60,
    color: "white",
    marginRight: 5,
    backgroundColor: "white",
  },
  view1: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderTopWidth: 0,
    borderColor: "gray",
    paddingRight: 5,
    paddingTop: 10,
    paddingBottom: 5,
  },
});

export default Imagescreen;
