import { View, Image } from "react-native";
import splashImage from "./src/assets/blue3.png";
import logoImage from "./src/assets/logo.png";

const SplashScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Image source={splashImage} style={{ flex: 1 }} />
      <View style={{ position: "absolute", top: 50, left: 50 }}>
        <Image source={logoImage} />
      </View>
    </View>
  );
};

export default SplashScreen;
