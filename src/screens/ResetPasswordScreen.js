import {
  Text,
  View,
  TextInput,
  ImageBackground,
  Button,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import AppStyles from "../styles/AppStyles";
import InlineTextButton from "../components/inlineTextButton";
import React from "react";
import { auth } from "../firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import { LinearGradient } from "expo-linear-gradient";
export default function ResetPassword({ navigation }) {
  let [email, setEmail] = React.useState("");
  let [errorMessage, setErrorMessage] = React.useState("");

  let resetPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        navigation.popToTop();
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  return (
    <LinearGradient
      colors={["#1D76C9", "#2D52D3"]}
      style={styles.logocontainer}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        keyboardVerticalOffset={60}
      >
        <View style={styles.container}>
          <Text style={[AppStyles.lightText, AppStyles.header]}>
            Reset Password
          </Text>
          <Text style={AppStyles.errorText}>{errorMessage}</Text>
          <TextInput
            style={[
              AppStyles.textInput,
              AppStyles.lightTextInput,
              AppStyles.lightText,
            ]}
            placeholder="Email"
            placeholderTextColor="#BEBEBE"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={[AppStyles.rowContainer, AppStyles.topMargin]}>
          <Text style={AppStyles.lightText}>Don't have an account? </Text>
          <InlineTextButton
            text="Sign Up"
            onPress={() => navigation.navigate("Register")}
          />
        </View>

        <TouchableOpacity onPress={resetPassword} style={styles.touch1}>
          <Text style={styles.btn1}>Reset password</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  logocontainer: {
    alignItems: "center",

    flex: 1,
  },
  container: {
    marginTop: 300,
    alignItems: "center",
  },
  touch1: {
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "#43A6DD",
    width: 340,
    borderRadius: 10,
    marginTop: 40,
    height: 60,
  },
  btn1: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
  },
});
