import {
  Text,
  View,
  TextInput,
  ImageBackground,
  Button,
  Image,
  Platform,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useFonts } from "expo-font";
import AppStyles from "../styles/AppStyles";
import InlineTextButton from "../components/inlineTextButton";
import React from "react";
import { db, auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { LinearGradient } from "expo-linear-gradient";

const RegisterScreen = ({ navigation }) => {
  let [email, setEmail] = React.useState("");
  let [password, setPassword] = React.useState("");
  let [confirmPassword, setConfirmPassword] = React.useState("");
  let [validationMessage, setValidationMessage] = React.useState("");

  let validateAndSet = (value, valueToCompare, setValue) => {
    if (value !== valueToCompare) {
      setValidationMessage("");
    } else {
      setValidationMessage("");
    }

    setValue(value);
  };

  let signUp = () => {
    if (password === confirmPassword) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          sendEmailVerification(auth.currentUser);

          navigation.navigate("Main", { user: userCredential.user });
        })
        .catch((error) => {
          setValidationMessage(error.message);
        });
    } else {
      setValidationMessage("Passwords do not match.");
    }
  };

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
        <Image source={require("../assets/icon1.png")} />
      </View>
      <View style={styles.Textcontainer}>
        <Text style={styles.logotext}>NEURAL</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.btntext1}>Create new account</Text>
        <Text style={[AppStyles.errorText]}>{validationMessage}</Text>
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
          placeholderTextColor="#BEBEBE"
          secureTextEntry={true}
          value={password}
          onChangeText={(value) =>
            validateAndSet(value, confirmPassword, setPassword)
          }
        />
        <TextInput
          style={[
            AppStyles.textInput,
            AppStyles.lightTextInput,
            AppStyles.lightText,
            styles.input1,
          ]}
          placeholder="Confirm Password"
          placeholderTextColor="#BEBEBE"
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={(value) =>
            validateAndSet(value, password, setConfirmPassword)
          }
        />
        <View style={[AppStyles.rowContainer, AppStyles.topMargin]}>
          <Text style={AppStyles.lightText}>Already have an account? </Text>
          <InlineTextButton
            text="Login"
            onPress={() => navigation.popToTop()}
          />
        </View>

        <TouchableOpacity onPress={signUp} style={styles.touch1}>
          <Text style={styles.btn1}>Sign Up</Text>
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
  container: {
    marginTop: 60,
    alignItems: "center",
  },
  Imagecontainer: {
    marginTop: 80,
  },
  Textcontainer: {
    marginTop: 30,
  },
  logotext: {
    fontSize: 40,
    color: "white",
    fontWeight: "bold",
    fontFamily: "Orbitron",
  },
  btn1: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
  },
  btntext1: {
    color: "white",
    textAlign: "center",
    fontSize: 25,
    fontFamily: "interextra",
    paddingTop: 15,
  },
  touch1: {
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "#43A6DD",
    width: 340,
    borderRadius: 10,
    marginTop: 10,
    height: 60,
  },
  input1: {
    color: "black",
  },
});

export default RegisterScreen;
